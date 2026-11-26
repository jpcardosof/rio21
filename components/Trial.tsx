import { InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { delay } from "@/components/motion";
import type { Dictionary } from "@/content/types";

type TrialProps = {
  trial: Dictionary["trial"];
  ui: Dictionary["ui"];
  whatsappHref: string;
  instagramHref: string;
};

/** Destaque da aula experimental gratuita — o principal objetivo do site. */
export function Trial({ trial, ui, whatsappHref, instagramHref }: TrialProps) {
  return (
    <section id="aula-gratis" aria-labelledby="aula-gratis-titulo" className="py-6 lg:py-10">
      <div className="shell">
        <div
          data-reveal
          className="relative overflow-hidden rounded-[2rem] bg-accent px-6 py-14 text-accent-fg sm:px-10 lg:px-16 lg:py-20"
        >
          {/* Riscas diagonais, eco discreto dos cartazes Rio21 */}
          <svg
            aria-hidden="true"
            viewBox="0 0 200 200"
            className="pointer-events-none absolute -right-10 -top-10 h-72 w-72 text-ink/[0.07] lg:h-96 lg:w-96"
          >
            {[0, 24, 48, 72, 96].map((offset) => (
              <path key={offset} d={`M${offset} 200 L${offset + 100} 100 L${offset} 0`} fill="none" stroke="currentColor" strokeWidth="6" />
            ))}
          </svg>

          <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em]">{trial.eyebrow}</p>
              <h2 id="aula-gratis-titulo" className="display mt-5 max-w-xl text-[clamp(2.5rem,5vw,4.5rem)]">
                {trial.title}
              </h2>
              <p className="mt-6 max-w-md text-lg">{trial.text}</p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-ink min-h-14 px-7">
                  <WhatsAppIcon />
                  {ui.ctaWhatsapp}
                </a>
                <p className="text-sm">
                  {trial.or}{" "}
                  <a
                    href={instagramHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 font-semibold underline decoration-1 underline-offset-[6px]"
                  >
                    <InstagramIcon className="h-4 w-4" />
                    {ui.ctaInstagram}
                  </a>
                </p>
              </div>
            </div>

            <ol className="grid content-start gap-3 lg:col-span-5">
              {trial.steps.map((step, index) => (
                <li
                  key={step.title}
                  data-reveal
                  style={delay(150 + index * 120)}
                  className="flex gap-4 rounded-2xl bg-white/45 p-5 backdrop-blur-sm"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink text-sm font-semibold tabular-nums text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="mt-0.5 text-[15px] text-ink/75">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative mt-12 flex flex-col gap-4 border-t border-ink/15 pt-8 lg:flex-row lg:items-center lg:gap-8">
            <h3 className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em]">{trial.bringTitle}</h3>
            <ul className="flex flex-wrap gap-2">
              {trial.bring.map((item) => (
                <li key={item} className="rounded-full border border-ink/15 px-4 py-1.5 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
