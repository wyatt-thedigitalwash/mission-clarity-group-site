import Image from "next/image";

interface FullBleedImageProps {
  src: string;
  alt: string;
  height?: string;
  overlay?: boolean;
  overlayOpacity?: string;
  children?: React.ReactNode;
}

export default function FullBleedImage({
  src,
  alt,
  height = "60vh",
  overlay = false,
  overlayOpacity = "bg-black/50",
  children,
}: FullBleedImageProps) {
  return (
    <section className="relative w-full" style={{ minHeight: height }}>
      <Image src={src} alt={alt} fill className="object-cover" />
      {overlay && <div className={`absolute inset-0 ${overlayOpacity}`} />}
      {children && (
        <div className="relative z-10 flex min-h-full items-center px-5 py-24 md:px-12 md:py-32">
          {children}
        </div>
      )}
    </section>
  );
}
