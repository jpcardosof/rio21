type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  tone?: "dark" | "light";
};

export function SectionIntro({
  eyebrow,
  title,
  text,
  tone = "dark"
}: SectionIntroProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2
        className={`section-title ${
          tone === "light" ? "text-ink" : "text-white"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={`mt-5 text-base leading-7 sm:text-lg ${
            tone === "light" ? "text-neutral-700" : "text-neutral-300"
          }`}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}
