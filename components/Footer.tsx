import { siteConfig } from "@/siteConfig";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 text-white">
      <div className="section-shell grid gap-10 lg:grid-cols-[1fr_1.6fr_1fr]">
        <div>
          <a href="#inicio" className="inline-flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-sm border border-ember bg-white text-sm font-black text-ink">
              R21
            </span>
            <span>
              <span className="block text-sm font-black uppercase tracking-[0.22em]">
                Rio21 BJJ
              </span>
              <span className="block text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
                Odivelas · Lisboa
              </span>
            </span>
          </a>
          <p className="mt-5 max-w-xs leading-7 text-neutral-400">
            Escola de Jiu-Jitsu Brasileiro em Odivelas, com filial em Vila
            Franca de Xira. {siteConfig.slogan}
          </p>
        </div>

        <nav className="grid gap-2 sm:grid-cols-2" aria-label="Links do rodapé">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold uppercase tracking-wide text-neutral-300 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-ember">
            Contactos
          </p>
          <a
            href={siteConfig.contacts.whatsappUrl}
            className="mt-4 block text-sm font-black text-white hover:text-ember"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp · {siteConfig.contacts.whatsappDisplay}
          </a>
          <a
            href={`mailto:${siteConfig.contacts.email}`}
            className="mt-2 block text-sm text-neutral-300 hover:text-white"
          >
            {siteConfig.contacts.email}
          </a>
          <div className="mt-5 grid gap-2">
            {siteConfig.social.instagram.map((profile) => (
              <a
                key={profile.handle}
                href={profile.url}
                className="text-sm text-neutral-300 hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                {profile.handle}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="section-shell mt-10 border-t border-white/10 pt-6">
        <p className="text-sm text-neutral-500">
          © Rio21 BJJ. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
