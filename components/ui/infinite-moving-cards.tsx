"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;

    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    setStart(true);
  }, []);

  const getSpeed = () => {
    switch (speed) {
      case "fast":
        return "30s";
      case "normal":
        return "45s";
      case "slow":
        return "60s";
      default:
        return "45s";
    }
  };

  const getDirection = () => {
    return direction === "left" ? "forwards" : "backwards";
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={
          {
            "--animation-duration": getSpeed(),
            "--animation-direction": getDirection(),
          } as React.CSSProperties
        }
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-zinc-800 flex-shrink-0 px-8 py-6 md:w-[450px]"
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm leading-[1.6] text-black font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 font-bold mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm text-black">{item.title}</span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 0.5rem));
          }
        }
        .animate-scroll {
          animation: scroll var(--animation-duration) linear infinite
            var(--animation-direction);
        }
      `}</style>
    </div>
  );
};
