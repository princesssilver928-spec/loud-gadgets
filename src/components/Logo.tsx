"use client";

import Image from "next/image";

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 50, className = "" }: LogoProps) {
  return (
    <Image
      src="/logo-removebg-preview.png"
      alt="LOUD GADGETS Logo"
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}