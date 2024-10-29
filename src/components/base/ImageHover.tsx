import React from "react";

interface ImageHoverProps {
  src: string;
  alt?: string;
}

const ImageHover: React.FC<ImageHoverProps> = ({ src, alt }, ...props) => {
  return (
    <div className="image-container h-full w-full">
      <img className="image !h-full object-cover" src={src} alt={alt ?? "img"} {...props} />
    </div>
  );
};

export default ImageHover;
