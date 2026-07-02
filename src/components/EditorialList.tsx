export default function EditorialList({ items }: { items: string[] }) {
  const twoCol = items.length >= 6;

  return (
    <div className="mt-8">
      <div className="h-px w-full bg-mcg-gold" />
      <div
        className={
          twoCol
            ? "grid grid-cols-1 gap-x-12 md:grid-cols-2"
            : "grid grid-cols-1"
        }
      >
        {items.map((item) => (
          <div
            key={item}
            className="border-b border-mcg-sage/30 py-[10px] font-body text-[clamp(16px,1.8vw,17px)] leading-[1.65] text-mcg-green"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
