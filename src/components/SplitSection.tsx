import Image from "next/image";

interface SplitSectionProps {
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  aspectRatio?: string;
  children: React.ReactNode;
  className?: string;
}

export default function SplitSection({
  imageSrc,
  imageAlt,
  imagePosition = "left",
  aspectRatio = "3/4",
  children,
  className = "",
}: SplitSectionProps) {
  const imageBlock = (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio }}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
      />
    </div>
  );

  return (
    <div
      className={`grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-20 ${className}`}
    >
      {imagePosition === "left" ? (
        <>
          {imageBlock}
          <div className="flex flex-col justify-center">{children}</div>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-center">{children}</div>
          {imageBlock}
        </>
      )}
    </div>
  );
}
