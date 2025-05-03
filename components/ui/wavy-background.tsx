"use client"
import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors = ["#dc2626", "#ef4444", "#f87171"],
  waveWidth = 50,
  backgroundFill = "black",
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any
  className?: string
  containerClassName?: string
  colors?: string[]
  waveWidth?: number
  backgroundFill?: string
  blur?: number
  speed?: "slow" | "fast"
  waveOpacity?: number
  [key: string]: any
}) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const pathRefs = useRef<SVGPathElement[]>([])

  useEffect(() => {
    if (!svgRef.current) return

    const svg = svgRef.current
    const width = svg.clientWidth
    const height = svg.clientHeight

    // Create wave paths
    pathRefs.current = colors.map((_, i) => {
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
      path.setAttribute("fill", colors[i] || "#fff")
      path.setAttribute("opacity", waveOpacity.toString())
      svg.appendChild(path)
      return path
    })

    // Animation
    let animationId: number
    let phase = 0

    const animate = () => {
      const baseSpeed = speed === "fast" ? 0.02 : 0.005
      phase += baseSpeed

      pathRefs.current.forEach((path, i) => {
        const points: { x: number; y: number }[] = []
        const amplitude = 20 + i * 5
        const frequency = 0.01 + i * 0.005
        const segmentWidth = waveWidth

        for (let x = 0; x <= width + segmentWidth; x += segmentWidth) {
          const y = height / 2 + amplitude * Math.sin(frequency * x + phase + i)
          points.push({ x, y })
        }

        // Create path
        let d = `M ${points[0].x} ${points[0].y}`
        for (let i = 1; i < points.length; i++) {
          const cp1x = points[i - 1].x + segmentWidth / 2
          const cp1y = points[i - 1].y
          const cp2x = points[i].x - segmentWidth / 2
          const cp2y = points[i].y
          d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${points[i].x} ${points[i].y}`
        }
        d += ` L ${width} ${height} L 0 ${height} Z`
        path.setAttribute("d", d)
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      pathRefs.current.forEach((path) => path.remove())
    }
  }, [colors, waveWidth, speed, waveOpacity])

  return (
    <div className={cn("relative flex flex-col items-center justify-center overflow-hidden", containerClassName)}>
      <svg
        ref={svgRef}
        className="absolute inset-0 z-0"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          filter: `blur(${blur}px)`,
        }}
      />
      <div
        className={cn("relative z-10", className)}
        style={{
          backdropFilter: "blur(5px)",
        }}
        {...props}
      >
        {children}
      </div>
    </div>
  )
}
