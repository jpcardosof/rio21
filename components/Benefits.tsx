import { SectionIntro } from "@/components/SectionIntro";
import { siteConfig } from "@/siteConfig";

const ICON_PATHS: Record<string, string> = {
  shield: "M12 3l7 3v5c0 4.4-3 8.4-7 10-4-1.6-7-5.6-7-10V6l7-3z",
  pulse: "M3 12h4l2-6 4 12 2-6h6",
  guard:
    "M12 3l7 3v5c0 4.4-3 8.4-7 10-4-1.6-7-5.6-7-10V6l7-3zm-3 9l2 2 4-4",
  leaf: "M5 19c0-8 4-13 14-14-1 10-6 14-14 14zm0 0c2-4 5-7 9-9",
  target:
    "M12 20a8 8 0 100-16 8 8 0 000 16zm0-4a4 4 0 100-8 4 4 0 000 8zm0-3a1 1 0 100-2 1 1 0 000 2z",
  handshake:
    "M4 11l4-4 4 3 4-3 4 4-6 7a3 3 0 01-4 0l-6-7zm8-1v4",
  people:
    "M8 13a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm8 0a3 3 0 100-6 3 3 0 000 6zM2.5 19c.6-2.9 2.9-4.5 5.5-4.5s4.9 1.6 5.5 4.5m1-4.3c2.1.3 3.7 1.7 4.5 3.8",
  star: "M12 4l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 16.3l-4.8 2.6.9-5.4L4.2 9.7l5.4-.8L12 4z"
};

export function Benefits() {
  return (
    <section className="bg-graphite py-20 sm:py-24">
      <div className="section-shell">
        <SectionIntro
          eyebrow="Benefícios do Jiu-Jitsu"
          title={siteConfig.benefits.title}
        />
        <div className="mt-12 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.benefits.items.map((benefit) => (
            <div key={benefit.title} className="card-dark flex flex-col p-5">
              <span
                className="grid h-12 w-12 place-items-center rounded-sm border border-ember/50 bg-ember/10 text-ember"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={ICON_PATHS[benefit.icon] ?? ICON_PATHS.star} />
                </svg>
              </span>
              <p className="mt-5 text-lg font-black text-white">
                {benefit.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
