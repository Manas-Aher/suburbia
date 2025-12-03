"use client";

import { Logo } from "@/components/Logo";
import { useProgress } from "@react-three/drei";
import clsx from "clsx";

export default function Loading() {
  const { progress } = useProgress();

  return (
    <div
      className={clsx(
        "absolute inset-0 flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700",
        progress >= 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <div className="relative w-32 h-32 mb-8">
        <div className="absolute inset-0 rounded-full border-4 border-white/20" />
        <div
          className="absolute inset-0 rounded-full border-4 border-brand-pink"
          style={{
            clipPath: `inset(${100 - progress}% 0 0 0 round 50%)`,
            transition: "clip-path 0.3s linear",
          }}
        />
        <Logo className="absolute inset-0 m-auto w-20 text-brand-pink" />
      </div>

      <p className="tracking-widest text-xl font-semibold text-brand-lime">
        {Math.floor(progress)}%
      </p>
    </div>
  );
}
