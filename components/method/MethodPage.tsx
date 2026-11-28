import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RevealObserver } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { StickyCta } from "@/components/StickyCta";
import { WhatsAppIcon } from "@/components/icons";
import { ProgramExplorer } from "@/components/method/ProgramExplorer";
import { ValuesGrades } from "@/components/method/ValuesGrades";
import { delay } from "@/components/motion";
import { getDictionary } from "@/content";
import { getMethod } from "@/content/curriculum";
import type { Locale } from "@/content/types";
import { cycleWeek } from "@/lib/cycle";
import { siteConfig, whatsappUrl } from "@/siteConfig";

export function MethodPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const method = getMethod(locale);
  const wa = whatsappUrl(dict.whatsappMessage);
  const now = new Date();
  const initialWeeks = {
    16: cycleWeek(now, siteConfig.curriculumStart, 16),
    8: cycleWeek(now, siteConfig.curriculumStart, 8)
  };

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-accent focus:px-4 focus:py-3 focus:text-accent-fg"
      >
        {dict.ui.skipToContent}
      </a>

      <Header locale={locale} nav={dict.nav} ui={dict.ui} whatsappHref={wa} />

      <main id="conteudo">
        <section className="pb-16 pt-[calc(var(--header-h)+2.5rem)] lg:pb-20 lg:pt-[calc(var(--header-h)+4.5rem)]">
          <div className="shell">
            <div className="max-w-3xl">
              <div className="rise">
                <SectionLabel>{method.eyebrow}</SectionLabel>
              </div>
              <h1 className="rise display mt-7 text-[clamp(2.75rem,6vw,5rem)]" style={delay(120)}>
                {method.title}
              </h1>
              <p className="rise mt-7 max-w-2xl text-lg text-muted" style={delay(260)}>
                {method.intro}
              </p>
            </div>
            <div className="rise mt-14" style={delay(380)}>
              <ProgramExplorer
                method={{
                  programs: method.programs,
                  weekLabel: method.weekLabel,
                  thisWeek: method.thisWeek,
                  tablistLabel: method.tablistLabel
                }}
                initialWeeks={initialWeeks}
              />
            </div>
          </div>
        </section>

        <ValuesGrades values={method.values} />

        <section aria-labelledby="metodo-cta" className="pb-24 lg:pb-32">
          <div className="shell">
            <div
              data-reveal
              className="flex flex-col gap-8 rounded-[2rem] bg-accent px-7 py-12 text-accent-fg sm:px-12 lg:flex-row lg:items-center lg:justify-between lg:px-16"
            >
              <div className="max-w-xl">
                <h2 id="metodo-cta" className="display text-[clamp(2rem,4vw,3.25rem)]">
                  {method.cta.title}
                </h2>
                <p className="mt-4 text-lg">{method.cta.text}</p>
              </div>
              <a href={wa} target="_blank" rel="noreferrer" className="btn-ink min-h-14 shrink-0 px-7">
                <WhatsAppIcon />
                {dict.ui.ctaWhatsapp}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer footer={dict.footer} nav={dict.nav} />
      <StickyCta href={wa} label={dict.ui.ctaWhatsapp} />
      <RevealObserver />
    </>
  );
}
