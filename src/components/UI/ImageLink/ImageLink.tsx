import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ImageLink = ({
  src,
  altText,
  href,
  width,
  height,
  linkClassName,
  imageClassName,
}: {
  src: string;
  altText: string;
  href: string;
  linkClassName?: string;
  imageClassName?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <Link href={href} className={linkClassName}>
      <Image
        src={src}
        alt={altText}
        width={width}
        height={height}
        className={imageClassName}
      />
    </Link>
  );
};

export default ImageLink;
