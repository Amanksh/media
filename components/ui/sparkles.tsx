"use client"
import type React from "react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export const SparklesCore = ({
  id,
  background,
  minSize,
  maxSize,
  speed,
  particleColor,
  className,
  particleDensity,
  particleCount,
  children,
}: {
  id?: string
  background?: string
  minSize?: number
  maxSize?: number
  speed?: number
  particleColor?: string
  className?: string
  particleDensity?: number
  particleCount?: number
  children?: React.ReactNode
}) => {
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 })
  const [particles, setParticles] = useState<
    Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
    }>
  >([])

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setCanvasSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    if (canvasSize.width === 0 || canvasSize.height === 0) return

    const count = particleCount || 50
    const _minSize = minSize || 1
    const _maxSize = maxSize || 3
    const _speed = speed || 0.5

    const newParticles = Array.from({ length: count }, () => ({
      x: Math.random() * canvasSize.width,
      y: Math.random() * canvasSize.height,
      size: _minSize + Math.random() * (_maxSize - _minSize),
      speedX: (Math.random() - 0.5) * _speed,
      speedY: (Math.random() - 0.5) * _speed,
    }))

    setParticles(newParticles)

    const canvas = document.getElementById(id || "sparkles-canvas") as HTMLCanvasElement
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    const render = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvasSize.width, canvasSize.height)

      particles.forEach((particle, i) => {
        // Update position
        particles[i].x += particle.speedX
        particles[i].y += particle.speedY

        // Wrap around edges
        if (particles[i].x > canvasSize.width) particles[i].x = 0
        if (particles[i].x < 0) particles[i].x = canvasSize.width
        if (particles[i].y > canvasSize.height) particles[i].y = 0
        if (particles[i].y < 0) particles[i].y = canvasSize.height

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particleColor || "#dc2626"
        ctx.fill()
      })

      animationFrameId = window.requestAnimationFrame(render)
    }

    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [canvasSize, id, maxSize, minSize, particleColor, particleCount, particles, speed])

  return (
    <div className={cn("relative h-full w-full", className)}>
      <canvas
        id={id || "sparkles-canvas"}
        width={canvasSize.width}
        height={canvasSize.height}
        className="absolute inset-0 z-0"
        style={{
          background: background || "transparent",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
