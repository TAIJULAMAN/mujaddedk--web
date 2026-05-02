"use client";

import React, { useId } from "react";
import { Mail, Smartphone, Share2, Play, Database } from "lucide-react";

const streams = [
  { label: "EMAIL", originX: 100, icon: Mail },
  { label: "MOBILE", originX: 250, icon: Smartphone },
  { label: "SOCIAL MEDIA", originX: 400, icon: Share2 },
  { label: "AUDIO/VIDEO", originX: 550, icon: Play },
  { label: "DATABASES", originX: 700, icon: Database },
];

export function DataFunnel({ className }: { className?: string }) {
  const compId = useId();

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center ${className || ""}`}
    >
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full max-h-[600px] overflow-visible"
        style={{ filter: "drop-shadow(0px 10px 30px rgba(83, 74, 183, 0.1))" }}
      >
        <defs>
          <linearGradient
            id={`${compId}-glow`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#1E3A5F" />
            <stop offset="100%" stopColor="#1E3A5F" />
          </linearGradient>

          <linearGradient
            id={`${compId}-pathGradient`}
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="0"
            y2="600"
          >
            <stop offset="0%" stopColor="#1E3A5F" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#1E3A5F" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        {streams.map((stream, idx) => {
          const pathId = `${compId}-path-${idx}`;
          const delay = (idx * 0.7) % 2;
          const d = `M ${stream.originX} 80 C ${stream.originX} 250, 400 250, 400 450`;

          return (
            <g key={stream.label}>
              <path
                id={pathId}
                d={d}
                fill="none"
                stroke={`url(#${compId}-pathGradient)`}
                strokeWidth="1.5"
                className="opacity-40"
              />
              <foreignObject
                x={stream.originX - 12}
                y="20"
                width="24"
                height="24"
              >
                <div className="flex items-center justify-center text-[#1E3A5F]">
                  <stream.icon size={18} strokeWidth={2.5} />
                </div>
              </foreignObject>
              <text
                x={stream.originX}
                y="65"
                textAnchor="middle"
                fill="#1E3A5F"
                className="text-[10px] font-bold tracking-widest uppercase"
                style={{ letterSpacing: "0.1em" }}
              >
                {stream.label}
              </text>
              <circle cx={stream.originX} cy="80" r="3" fill="#1E3A5F" />
              <circle
                r="4"
                fill="#1E3A5F"
                style={{ filter: "drop-shadow(0 0 4px #1E3A5F)" }}
              >
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
              <circle r="3" fill="#1E3A5F">
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
        <g transform="translate(400, 450)">
          <circle cx="0" cy="0" r="15" fill={`url(#${compId}-glow)`} />

          <text
            x="0"
            y="35"
            textAnchor="middle"
            fill="#1E3A5F"
            className="text-[16px] font-[800] tracking-widest uppercase bg-white px-2"
          >
            CRIVO
          </text>
        </g>
      </svg>
    </div>
  );
}
