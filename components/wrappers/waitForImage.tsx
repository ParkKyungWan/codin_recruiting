"use client";
import { useEffect, useState } from "react";

const WaitForImage: React.FC<{
  src: string;
  children: React.ReactNode;
}> = ({ src, children }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {console.log("loaded");setLoaded(true)};
  }, [src]);

  return loaded ? <>{children}</> : null;
};

export default WaitForImage;