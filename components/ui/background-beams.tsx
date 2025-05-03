"use client"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export const BackgroundBeams = ({
  className,
  ...props
}: {
  className?: string
}) => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext("2d")
    if (!context) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Initial setup
    setCanvasDimensions()

    // Handle window resize
    window.addEventListener("resize", setCanvasDimensions)

    // Mouse move event
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation
    let animationFrameId: number
    const render = () => {
      if (!context || !canvas) return

      context.clearRect(0, 0, canvas.width, canvas.height)

      // Create radial gradient
      const gradient = context.createRadialGradient(
        mousePosition.x,
        mousePosition.y,
        0,
        mousePosition.x,
        mousePosition.y,
        400,
      )

      gradient.addColorStop(0, "rgba(220, 38, 38, 0.15)") // Red color with low opacity
      gradient.addColorStop(1, "rgba(220, 38, 38, 0)")

      context.fillStyle = gradient
      context.fillRect(0, 0, canvas.width, canvas.height)

      // Draw beams
      const numBeams = 8
      const angleStep = (Math.PI * 2) / numBeams

      for (let i = 0; i < numBeams; i++) {
        const angle = i * angleStep
        const length = 300 + Math.sin(Date.now() * 0.001 + i) * 50

        const startX = mousePosition.x
        const startY = mousePosition.y
        const endX = startX + Math.cos(angle) * length
        const endY = startY + Math.sin(angle) * length

        context.beginPath()
        context.moveTo(startX, startY)
        context.lineTo(endX, endY)
        context.strokeStyle = "rgba(220, 38, 38, 0.1)" // Red color with low opacity
        context.lineWidth = 2
        context.stroke()
      }

      animationFrameId = window.requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("mousemove", handleMouseMove)
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [mousePosition])

  return <canvas ref={canvasRef} className={cn("absolute inset-0 z-0", className)} {...props} />
}
