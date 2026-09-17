import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Hover lift for header/footer controls.
 *
 * Deliberately CSS, not a spring: these are hit tens of times a day, so the
 * motion has to be near-imperceptible, and a spring that runs while the hero
 * parallax and images are still loading drops frames on the main thread.
 * Press feedback lives on the Button itself (`active:scale-[0.97]`).
 */
export function SpringHover({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cn('hover-lift', className)}>{children}</div>
}
