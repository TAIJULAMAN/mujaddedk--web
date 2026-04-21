"use client";

import React, { useId } from "react";

const streams = [
  { label: "RELATIVITY", originX: 100 },
  { label: "DISCO", originX: 250 },
  { label: "EVERLAW", originX: 400 },
  { label: "NUIX", originX: 550 },
  { label: "LOGIKCULL", originX: 700 },
];

export function DataFunnel({ className }: { className?: string }) {
  const compId = useId();

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className || ""}`}>
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full max-h-[600px] overflow-visible"
        style={{ filter: "drop-shadow(0px 10px 30px rgba(83, 74, 183, 0.1))" }}
      >
        <defs>
          <linearGradient id={`${compId}-glow`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7F77DD" />
            <stop offset="100%" stopColor="#534AB7" />
          </linearGradient>
          {/* Gradient for paths */}
          <linearGradient id={`${compId}-pathGradient`} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="600">
            <stop offset="0%" stopColor="#AFA9EC" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#534AB7" stopOpacity="0.8" />
          </linearGradient>
        </defs>



        {/* Streams and Particles */}
        {streams.map((stream, idx) => {
          const pathId = `${compId}-path-${idx}`;
          const delay = (idx * 0.7) % 2; // offset delays
          // M = move to origin. C = cubic bezier to destination (400, 450)
          const d = `M ${stream.originX} 80 C ${stream.originX} 250, 400 250, 400 450`;

          return (
            <g key={stream.label}>
              {/* Path */}
              <path
                id={pathId}
                d={d}
                fill="none"
                stroke={`url(#${compId}-pathGradient)`}
                strokeWidth="1.5"
                className="opacity-40"
              />

              {/* Source Label */}
              <text
                x={stream.originX}
                y="60"
                textAnchor="middle"
                fill="#AFA9EC"
                className="text-[12px] font-bold tracking-widest uppercase"
                style={{ letterSpacing: "0.1em" }}
              >
                {stream.label}
              </text>

              {/* Source Node Dot */}
              <circle cx={stream.originX} cy="80" r="3" fill="#AFA9EC" />

              {/* Particle 1 */}
              <circle r="4" fill="#534AB7" style={{ filter: "drop-shadow(0 0 4px #7F77DD)" }}>
                <animateMotion
                  dur="3s"
                  repeatCount="indefinite"
                  begin={`${delay}s`}
                >
                  <mpath href={`#${pathId}`} />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.1;0.9;1"
                  dur="3s"
                  repeatCount="indefinite"
                  begin={`${delay}s`}
                />
              </circle>

              {/* Particle 2 (Staggered) */}
              <circle r="3" fill="#7F77DD">
                <animateMotion
                  dur="4s"
                  repeatCount="indefinite"
                  begin={`${delay + 1.5}s`}
                >
                  <mpath href={`#${pathId}`} />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.1;0.9;1"
                  dur="4s"
                  repeatCount="indefinite"
                  begin={`${delay + 1.5}s`}
                />
              </circle>
            </g>
          );
        })}

        {/* Central Convergence Node (CRIVO) */}
        <g transform="translate(400, 450)">
          {/* Pulsing ring */}
          <circle cx="0" cy="0" r="35" fill="none" stroke="#7F77DD" strokeWidth="2" className="opacity-50">
            <animate
              attributeName="r"
              values="30; 45; 30"
              dur="2.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.8; 0; 0.8"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Solid center dot */}
          <circle cx="0" cy="0" r="15" fill={`url(#${compId}-glow)`} />
          
          <text
            x="0"
            y="35"
            textAnchor="middle"
            fill="#534AB7"
            className="text-[16px] font-[800] tracking-widest uppercase bg-white px-2"
          >
            CRIVO
          </text>
        </g>
      </svg>
    </div>
  );
}
