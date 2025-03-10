'use client';

import { useEffect, useState, useMemo, useCallback } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  velocity: { x: number; y: number };
}

interface Constellation {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  opacity: number;
}

const STAR_COUNT = 50;
const MAX_DISTANCE = 15;
const MAX_CONNECTIONS = 3;
const FPS = 30;

export const StarryBackground = () => {
  const [stars, setStars] = useState<Star[]>(() => 
    Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 2,
      velocity: {
        x: (Math.random() - 0.5) * 0.05,
        y: (Math.random() - 0.5) * 0.05
      }
    }))
  );

  const updateStars = useCallback(() => {
    setStars(currentStars => 
      currentStars.map(star => {
        let newX = star.x + star.velocity.x;
        let newY = star.y + star.velocity.y;

        if (newX < 0 || newX > 100) {
          star.velocity.x *= -1;
          newX = Math.max(0, Math.min(100, newX));
        }
        if (newY < 0 || newY > 100) {
          star.velocity.y *= -1;
          newY = Math.max(0, Math.min(100, newY));
        }

        return { ...star, x: newX, y: newY };
      })
    );
  }, []);

  useEffect(() => {
    let frameId: number;
    let lastUpdate = 0;
    const interval = 1000 / FPS;

    const animate = (timestamp: number) => {
      if (timestamp - lastUpdate >= interval) {
        updateStars();
        lastUpdate = timestamp;
      }
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [updateStars]);

  const constellations = useMemo(() => {
    const connections: Constellation[] = [];
    stars.forEach((star, i) => {
      const nearestStars = stars
        .map((s, index) => ({
          star: s,
          distance: Math.hypot(s.x - star.x, s.y - star.y),
          index
        }))
        .filter(s => s.index !== i)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, MAX_CONNECTIONS);

      nearestStars.forEach(({ star: nearStar, distance }) => {
        if (distance < MAX_DISTANCE) {
          connections.push({
            x1: star.x,
            y1: star.y,
            x2: nearStar.x,
            y2: nearStar.y,
            opacity: Math.max(0.1, 1 - distance / MAX_DISTANCE)
          });
        }
      });
    });
    return connections;
  }, [stars]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#93C5FD" stopOpacity="1" />
            <stop offset="100%" stopColor="#93C5FD" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {constellations.map((line, i) => (
          <line
            key={`line-${i}`}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x2}%`}
            y2={`${line.y2}%`}
            stroke="#93C5FD"
            strokeWidth="0.5"
            strokeOpacity={line.opacity * 0.3}
          />
        ))}

        {stars.map((star, i) => (
          <g key={`star-${i}`} className="transition-transform duration-1000 ease-out">
            <circle
              cx={`${star.x}%`}
              cy={`${star.y}%`}
              r={star.size * 2}
              fill="url(#starGlow)"
              opacity="0.3"
            />
            <circle
              cx={`${star.x}%`}
              cy={`${star.y}%`}
              r={star.size / 2}
              fill="#93C5FD"
              opacity="0.8"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}; 