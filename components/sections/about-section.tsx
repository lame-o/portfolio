'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'

// Entrances use the full transform string, not Motion's `x` shorthand — the
// shorthand animates on the main thread and drops frames while the hero
// parallax and these images are still loading. Strong ease-out, because an
// entrance should move immediately, at the moment the eye is on it.
const ENTER_EASE = [0.23, 1, 0.32, 1] as const

export function AboutSection() {
  const waveVideoRef = React.useRef<HTMLVideoElement>(null)
  const reduceMotion = useReducedMotion()

  // The photos keep their tilt throughout; only the slide-in is animated.
  // Both ends list the same transform functions so Motion interpolates them
  // pairwise instead of falling back to a discrete swap.
  const photoEnter = (from: string, tilt: string) => ({
    initial: {
      opacity: 0,
      transform: `translateX(${reduceMotion ? '0px' : from}) rotate(${tilt})`,
    },
    whileInView: { opacity: 1, transform: `translateX(0px) rotate(${tilt})` },
  })

  // The hand is painted at rest by the video's `poster`, so it's there on first
  // load rather than materialising on hover. Playing restarts from the top;
  // under reduced motion it never plays and the poster simply stays put.
  const playWave = React.useCallback(() => {
    const video = waveVideoRef.current
    if (reduceMotion || !video || !video.paused) return
    video.currentTime = 0
    video.play().catch(() => {})
  }, [reduceMotion])

  return (
    <section id="about" className="pt-16 pb-16 md:pt-32 md:pb-32 bg-[#785650] relative z-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-12 items-center">
          <motion.div
            initial={
              reduceMotion ? { opacity: 0 } : { opacity: 0, transform: 'translateX(-20px)' }
            }
            whileInView={
              reduceMotion ? { opacity: 1 } : { opacity: 1, transform: 'translateX(0px)' }
            }
            transition={{ duration: 0.6, ease: ENTER_EASE }}
            viewport={{ once: true }}
            className="space-y-6"
            // Waves once when the greeting scrolls in — a first-time moment, so
            // it's the tier where delight is allowed — and again on hover.
            // Touch devices never fire hover, so without the viewport trigger
            // they'd only ever see the still hand.
            onViewportEnter={playWave}
            onMouseEnter={playWave}
          >
            <p className="text-lg leading-relaxed text-white/90">
              Hello <span className="inline-block align-middle">
                <video
                  ref={waveVideoRef}
                  className="w-7 h-7 inline-block transform -translate-y-0.5"
                  muted
                  playsInline
                  preload="metadata"
                  poster="/images/wave-hand.webp"
                  width={28}
                  height={28}
                  aria-hidden="true"
                >
                  <source src="/images/wave-hand.webm" type="video/webm" />
                </video>
              </span> I'm Liam. Currently an{' '}
              <span className="font-bold text-[#ffecd6]">
                AI Strategist @{' '}
                <a
                  href="https://cadre.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  // Underline carries the affordance; only its colour animates on
                  // hover, so the text itself never shifts.
                  className="rounded-sm underline decoration-[#ffecd6]/40 underline-offset-4 transition-colors duration-150 hover:decoration-[#ffecd6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffecd6]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#785650]"
                >
                  Cadre AI
                </a>
              </span>
            </p>
            <p className="text-lg leading-relaxed text-white/90">
              Please reach out using my contact below
            </p>
          </motion.div>

          <div className="relative w-full h-[320px] sm:h-[400px] md:h-[450px]">
            <motion.div
              {...photoEnter('20px', '15deg')}
              transition={{ duration: 0.6, delay: 0.2, ease: ENTER_EASE }}
              viewport={{ once: true }}
              className="absolute right-[6%] md:right-0 top-0 md:-top-10 w-[58%] md:w-[350px] md:h-[450px] aspect-[7/9] md:aspect-auto"
            >
              <Image
                src="/images/professional-photo.webp"
                alt="Liam Dwight Professional Photo"
                fill
                sizes="(max-width: 768px) 60vw, 350px"
                className="object-cover rounded-2xl border-4 border-[#ffecd6] shadow-[0_20px_80px_rgba(120,_86,_80,_0.95)] hover:scale-105 transition-transform duration-200 ease-out-strong motion-reduce:transition-none motion-reduce:hover:scale-100"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              {...photoEnter('-20px', '-15deg')}
              transition={{ duration: 0.6, delay: 0.4, ease: ENTER_EASE }}
              viewport={{ once: true }}
              className="absolute right-[44%] md:right-[40%] bottom-0 w-[50%] md:w-[300px] md:h-[400px] aspect-[3/4] md:aspect-auto"
            >
              <Image
                src="/images/casual-photo.webp"
                alt="Liam Dwight Casual Photo"
                fill
                sizes="(max-width: 768px) 50vw, 300px"
                className="object-cover rounded-2xl border-4 border-[#ffecd6] shadow-[0_20px_80px_rgba(120,_86,_80,_0.95)] hover:scale-105 transition-transform duration-200 ease-out-strong motion-reduce:transition-none motion-reduce:hover:scale-100"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
