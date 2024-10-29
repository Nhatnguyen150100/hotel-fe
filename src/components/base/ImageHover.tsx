import React from "react";

interface ImageHoverProps {
  src: string;
  alt?: string;
  className?: string; // Additional class name for the image container
}

const ImageHover: React.FC<ImageHoverProps> = (
  { src, alt, className },
  ...props
) => {
  return (
    <div className={`image-container h-full w-full ${className}`}>
      <img
        className="image !h-full object-cover"
        src={src}
        alt={alt ?? "img"}
        {...props}
      />
    </div>
  );
};

export default ImageHover;
