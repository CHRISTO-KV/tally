"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  className,
  maxOpacity = 0.5,
  duration = 4,
  repeatDelay = 0.5,
  ...props
}) {
  const id = useId();
  const containerRef = useRef(null);
  const dimensionsRef = useRef({ width: 0, height: 0 });
  const [squares, setSquares] = useState(() =>
    Array.from({ length: numSquares }, (_, i) => ({
      id: i,
      pos: [0, 0],
    }))
  );

  useEffect(() => {
    const element = containerRef.current;
    if (!element) {
      return undefined;
    }

    const generateSquares = (nextDimensions) => {
      const columns = Math.max(1, Math.floor(nextDimensions.width / width));
      const rows = Math.max(1, Math.floor(nextDimensions.height / height));

      setSquares(
        Array.from({ length: numSquares }, (_, i) => ({
          id: i,
          pos: [Math.floor(Math.random() * columns), Math.floor(Math.random() * rows)],
        }))
      );
    };

    const syncDimensions = (nextDimensions) => {
      dimensionsRef.current = nextDimensions;
      generateSquares(nextDimensions);
    };

    const resizeObserver = new ResizeObserver(([entry]) => {
      if (!entry) {
        return;
      }

      syncDimensions({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    });

    const animationFrame = requestAnimationFrame(() => {
      const rect = element.getBoundingClientRect();
      syncDimensions({ width: rect.width, height: rect.height });
    });

    resizeObserver.observe(element);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.unobserve(element);
    };
  }, [height, numSquares, width]);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {squares.map(({ pos: [x, y], id }, index) => (
          <motion.rect
            initial={{ opacity: 0 }}
            animate={{ opacity: maxOpacity }}
            transition={{
              duration,
              repeat: Infinity,
              delay: index * 0.1,
              repeatType: "reverse",
            }}
            onUpdate={(latest) => {
              if (latest === 0) {
                const dimensions = dimensionsRef.current;
                const columns = Math.max(1, Math.floor(dimensions.width / width));
                const rows = Math.max(1, Math.floor(dimensions.height / height));

                setSquares((currentSquares) => {
                  const newSquares = [...currentSquares];
                  newSquares[index] = {
                    id,
                    pos: [Math.floor(Math.random() * columns), Math.floor(Math.random() * rows)],
                  };
                  return newSquares;
                });
              }
            }}
            key={`${x}-${y}-${index}`}
            width={width - 1}
            height={height - 1}
            x={x * width + 1}
            y={y * height + 1}
            fill="currentColor"
            strokeWidth="0"
          />
        ))}
      </svg>
    </svg>
  );
}
