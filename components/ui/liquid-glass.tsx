"use client";

import { cn } from "@/lib/utils";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const smoothStep = (a: number, b: number, t: number): number => {
  t = Math.max(0, Math.min(1, (t - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

const length = (x: number, y: number): number => {
  return Math.sqrt(x * x + y * y);
};

const roundedRectSDF = (
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
): number => {
  const qx = Math.abs(x) - width + radius;
  const qy = Math.abs(y) - height + radius;
  return (
    Math.min(Math.max(qx, qy), 0) +
    length(Math.max(qx, 0), Math.max(qy, 0)) -
    radius
  );
};

interface UV {
  x: number;
  y: number;
}

const DEFAULT_SETTINGS = {
  distortWidth: 0.3,
  distortHeight: 0.2,
  distortRadius: 0.6,
  smoothStepEdge: 0.8,
  distanceOffset: 0.15,
};

export interface LiquidGlassProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "overlay" | "floating";
}

export const LiquidGlass = ({
  variant = "overlay",
  className,
  style,
  children,
  ...props
}: LiquidGlassProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const feImageRef = useRef<SVGFEImageElement>(null);
  const feDisplacementMapRef = useRef<SVGFEDisplacementMapElement>(null);
  const filterId = useMemo(
    () => `liquid-glass-${Math.random().toString(36).slice(2, 11)}`,
    []
  );
  const [size, setSize] = useState({ width: 1, height: 1 });

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const updateSize = () =>
      setSize({ width: element.offsetWidth || 1, height: element.offsetHeight || 1 });

    updateSize();

    const observer = new ResizeObserver(updateSize);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const updateShader = useCallback(() => {
    if (
      !canvasRef.current ||
      !feImageRef.current ||
      !feDisplacementMapRef.current ||
      size.width <= 1 ||
      size.height <= 1
    ) {
      return;
    }

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    const canvasDPI = 1;
    const w = Math.floor(size.width * canvasDPI);
    const h = Math.floor(size.height * canvasDPI);
    if (w <= 0 || h <= 0) return;

    canvas.width = w;
    canvas.height = h;

    const data = new Uint8ClampedArray(w * h * 4);
    let maxScale = 0;
    const rawValues: number[] = [];

    const fragment = (uv: UV) => {
      const ix = uv.x - 0.5;
      const iy = uv.y - 0.5;
      const distanceToEdge = roundedRectSDF(
        ix,
        iy,
        DEFAULT_SETTINGS.distortWidth,
        DEFAULT_SETTINGS.distortHeight,
        DEFAULT_SETTINGS.distortRadius
      );
      const displacement = smoothStep(
        DEFAULT_SETTINGS.smoothStepEdge,
        0,
        distanceToEdge - DEFAULT_SETTINGS.distanceOffset
      );
      const scaled = smoothStep(0, 1, displacement);
      return { x: ix * scaled + 0.5, y: iy * scaled + 0.5 };
    };

    for (let i = 0; i < w * h; i++) {
      const x = i % w;
      const y = Math.floor(i / w);
      const pos = fragment({ x: x / w, y: y / h });
      const dx = pos.x * w - x;
      const dy = pos.y * h - y;
      maxScale = Math.max(maxScale, Math.abs(dx), Math.abs(dy));
      rawValues.push(dx, dy);
    }

    maxScale *= 0.5;

    let dataIndex = 0;
    let rawValueIndex = 0;
    for (let i = 0; i < w * h; i++) {
      const r = rawValues[rawValueIndex++] / maxScale + 0.5;
      const g = rawValues[rawValueIndex++] / maxScale + 0.5;
      data[dataIndex++] = r * 255;
      data[dataIndex++] = g * 255;
      data[dataIndex++] = 0;
      data[dataIndex++] = 255;
    }

    context.putImageData(new ImageData(data, w, h), 0, 0);
    feImageRef.current.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "href",
      canvas.toDataURL()
    );
    feDisplacementMapRef.current.setAttribute(
      "scale",
      (maxScale / canvasDPI).toString()
    );
  }, [size.height, size.width]);

  useEffect(() => {
    updateShader();
  }, [updateShader]);

  const baseStyles =
    variant === "overlay"
      ? {
          position: "absolute" as const,
          inset: 0,
          pointerEvents: "none" as const,
        }
      : {
          position: "relative" as const,
          pointerEvents: "auto" as const,
        };

  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute", pointerEvents: "none" }}>
        <defs>
          <filter
            id={filterId}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
            x="0"
            y="0"
            width={size.width}
            height={size.height}
          >
            <feImage
              ref={feImageRef}
              width={size.width}
              height={size.height}
              result={`${filterId}_map`}
            />
            <feDisplacementMap
              ref={feDisplacementMapRef}
              in="SourceGraphic"
              in2={`${filterId}_map`}
              xChannelSelector="R"
              yChannelSelector="G"
              scale="0"
            />
          </filter>
        </defs>
      </svg>

      <div
        ref={containerRef}
        style={{
          ...baseStyles,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25), 0 -10px 25px inset rgba(0, 0, 0, 0.15)",
          backdropFilter: `url(#${filterId}) blur(0.25px) contrast(1.2) brightness(1.05) saturate(1.1)`,
          ...style,
        }}
        className={cn(
          "flex h-full w-full items-center justify-center overflow-hidden border border-white/10",
          variant === "overlay" ? "pointer-events-none" : "pointer-events-auto",
          className
        )}
        {...props}
      >
        {children}
      </div>

      <canvas ref={canvasRef} width={size.width} height={size.height} style={{ display: "none" }} />
    </>
  );
};
