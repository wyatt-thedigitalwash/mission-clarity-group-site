interface PullQuoteProps {
  children: React.ReactNode;
  className?: string;
}

export default function PullQuote({ children, className = "" }: PullQuoteProps) {
  return (
    <div className={`mx-auto max-w-[680px] text-center ${className}`}>
      <div className="mx-auto mb-8 h-px w-24 bg-mcg-gold" />
      <p className="font-display text-[clamp(22px,2.8vw,28px)] font-500 leading-[1.35] text-mcg-green">
        {children}
      </p>
      <div className="mx-auto mt-8 h-px w-24 bg-mcg-gold" />
    </div>
  );
}
