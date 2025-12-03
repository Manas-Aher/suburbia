"use client";
import { HeadingLevelContext } from "./HeadingContext";

export function HeadingLevelProvider({ children }: { children: React.ReactNode }) {
  return (
    <HeadingLevelContext.Provider value={1}>
      {children}
    </HeadingLevelContext.Provider>
  );
}
