import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  blurDataURL?: string;
}

export default function BlurImage({ 
  src, 
  alt, 
  className, 
  blurDataURL,
  ...props 
}: BlurImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        className,
        "duration-500 ease-in-out",
        isLoading ? "blur-sm" : "blur-0"
      )}
      onLoad={() => setLoading(false)}
      {...props}
      style={{
        ...props.style,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${blurDataURL})`,
      }}
    />
  );
}