import { ReactNode } from "react";
import { cn } from "@/lib/utils"; // Utility function for class names

interface MaxWidthWrapperProps {
  className?: string; // Optional className prop
  large?: boolean; // Optional large prop to determine wrapper size
  children: ReactNode; // Children nodes to render
}

export default function MaxWidthWrapper({ className, children, large = false }: MaxWidthWrapperProps) {
  return (
    <div
      className={cn(
        "container",
        large ? "max-w-screen-2xl" : "max-w-6xl", // Set max width based on large prop
        className
      )}
    >
      {children} {/* Render children inside the wrapper */}
    </div>
  );
}