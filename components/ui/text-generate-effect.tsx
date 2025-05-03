"use client"

import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string
  className?: string
}) => {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isGenerating, setIsGenerating] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isGenerating) return

    if (currentIndex < words.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + words[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 30) // Adjust speed as needed

      return () => clearTimeout(timeout)
    } else {
      setIsGenerating(false)
    }
  }, [currentIndex, isGenerating, words])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setDisplayedText("")
          setCurrentIndex(0)
          setIsGenerating(true)
        }
      },
      { threshold: 0.5 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className={cn("", className)}>
      {displayedText}
      {isGenerating && <span className="inline-block w-1 h-5 bg-red-600 animate-blink" />}
    </div>
  )
}
