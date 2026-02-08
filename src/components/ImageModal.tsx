type Props = {
  images: string[] | null;
  index: number;
  setIndex: (i: number) => void;
  onClose: () => void;
};

export default function ImageModal({
  images,
  index,
  setIndex,
  onClose,
}: Props) {
  if (!images) return null;

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((index + 1) % images.length);
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((index - 1 + images.length) % images.length);
  };

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center
                 backdrop-blur-md bg-primary/70"
      onClick={onClose}
    >
      {images.length > 1 && index > 0 && (
        <button onClick={prev} className="hidden sm:flex absolute left-6">
          <div
            style={{
              maskImage: `url('/images/icons/arrowhead.svg')`,
              WebkitMaskImage: `url('/images/icons/arrowhead.svg')`,
            }}
            className="rotate-180 block w-6 h-8 icon-mask bg-primary"
          />
        </button>
      )}

      <img
        src={images[index]}
        className="max-h-[100vh] w-auto object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      {images.length > 1 && index < images.length - 1 && (
        <button onClick={next} className="hidden sm:flex absolute right-6">
          <div
            style={{
              maskImage: `url('/images/icons/arrowhead.svg')`,
              WebkitMaskImage: `url('/images/icons/arrowhead.svg')`,
            }}
            className="block w-6 h-8 icon-mask bg-primary"
          />
        </button>
      )}
    </div>
  );
}
