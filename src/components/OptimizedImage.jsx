import { useState, useEffect } from 'react';

export default function OptimizedImage({
  src,
  alt,
  width = '100%',
  height = 'auto',
  className = '',
  placeholder = null,
  srcSet = null,
  sizes = null,
  lazy = true,
  onLoad = null,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(lazy ? null : src);

  useEffect(() => {
    if (!lazy) {
      return;
    }

    // Background loading for lazy elements
    const img = new Image();
    img.onload = () => setImageSrc(src);
    img.onerror = () => console.error(`Failed to load image: ${src}`);
    img.src = src;
  }, [src, lazy]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  return (
    <picture>
      {/* WebP with fallback to JPEG */}
      {srcSet && <source srcSet={srcSet} type="image/webp" sizes={sizes} />}
      <img
        src={lazy ? imageSrc : src}
        alt={alt}
        width={width}
        height={height}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        loading={lazy ? 'lazy' : 'eager'}
        decoding="async"
        onLoad={handleLoad}
        {...props}
      />
      {/* Placeholder background during loading */}
      {placeholder && !isLoaded && (
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm"
          style={{ backgroundImage: `url(${placeholder})` }}
        />
      )}
    </picture>
  );
}
