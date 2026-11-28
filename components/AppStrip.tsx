import { AppleIcon, GooglePlayIcon } from "@/components/icons";
import type { Dictionary } from "@/content/types";
import { siteConfig } from "@/siteConfig";

/** Para quem já é aluno: links da app MentorFlow, no fim da página, sem competir com a aula grátis. */
export function AppStrip({ app }: { app: Dictionary["app"] }) {
  const stores = [
    { href: siteConfig.apps.appStore, label: app.appStoreLabel, name: "App Store", Icon: AppleIcon },
    { href: siteConfig.apps.googlePlay, label: app.googlePlayLabel, name: "Google Play", Icon: GooglePlayIcon }
  ];

  return (
    <section aria-labelledby="app-titulo" className="pb-10">
      <div className="shell">
        <div
          data-reveal
          className="flex flex-col gap-6 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <h2 id="app-titulo" className="text-lg font-semibold">
              {app.title}
            </h2>
            <p className="mt-1 text-muted">{app.text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {stores.map(({ href, label, name, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="btn-ghost min-h-12 px-5"
              >
                <Icon className="h-5 w-5" />
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
