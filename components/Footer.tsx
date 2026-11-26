import { Logo } from "@/components/Logo";
import { ArrowUpRightIcon } from "@/components/icons";
import type { Dictionary } from "@/content/types";
import { siteConfig } from "@/siteConfig";

type FooterProps = {
  footer: Dictionary["footer"];
  nav: Dictionary["nav"];
};

export function Footer({ footer, nav }: FooterProps) {
  const year = new Date().getFullYear();
  const linkClass = "inline-flex min-h-11 items-center gap-1.5 text-muted transition-colors hover:text-fg";

  return (
    <footer className="pb-28 lg:pb-10">
      <div className="shell">
        <div className="card grid gap-12 px-7 py-12 sm:px-10 lg:grid-cols-12 lg:px-14 lg:py-14">
          <div className="lg:col-span-6">
            <Logo className="h-11 text-fg" />
            <p className="display mt-7 text-2xl sm:text-3xl">{footer.slogan}</p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3 lg:col-start-8">
            <ul className="grid">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="grid content-start lg:col-span-2">
            <li>
              <a href={siteConfig.contacts.instagram} target="_blank" rel="noreferrer" className={linkClass}>
                Instagram <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.contacts.email}`} className={linkClass}>
                Email
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2 px-2 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. {footer.rights}
          </p>
          <a href="#inicio" className="inline-flex min-h-11 items-center transition-colors hover:text-fg">
            {footer.backToTop} ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
