"use client";

import Image from "next/image";
import { useState } from "react";

interface FallbackImageProps {
    src: string;
    alt: string;
    fill?: boolean;
    className?: string;
    priority?: boolean;
    fallbackSrc?: string;
}

const DEFAULT_FALLBACK = "/project1.webp";

export default function FallbackImage({
    src,
    alt,
    fill,
    className,
    priority,
    fallbackSrc = DEFAULT_FALLBACK,
}: FallbackImageProps) {
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <Image
            src={imgSrc}
            alt={alt}
            fill={fill}
            className={className}
            priority={priority}
            onError={() => setImgSrc(fallbackSrc)}
        />
    );
}
