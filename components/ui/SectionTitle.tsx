type SectionTitleProps = {
  tag: string;
  title: string;
  description: string;
  tagClassName?: string;
};

export default function SectionTitle({
  tag,
  title,
  description,
  tagClassName = "text-fuchsia-300/80",
}: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className={`text-sm font-semibold uppercase tracking-[0.35em] ${tagClassName}`}>
        {tag}
      </p>
      <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-white/60">{description}</p>
    </div>
  );
}