/**
 * It's a fallback for browsers that don't support webp
 * @param {Image}  - src - the path to the webp image
 * @returns A picture element with a source element and an img element.
 */
interface Image {
  src: string;
  fallbackSrc: string;
  alt?: string;
}

const Image = ({ src, fallbackSrc, alt }: Image) => {
  return (
    <>
      {/* It's a fallback for browsers that don't support webp. */}
      <picture>
        <source srcSet={src} type="image/webp" />
        <source srcSet={fallbackSrc} type="image/jpeg" />
        <img src={fallbackSrc} alt={alt} />
      </picture>
    </>
  );
};

export default Image;
