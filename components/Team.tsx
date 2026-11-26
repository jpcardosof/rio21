import { SectionLabel } from "@/components/SectionLabel";
import { ArrowUpRightIcon } from "@/components/icons";
import { delay } from "@/components/motion";
import type { Dictionary } from "@/content/types";
import { siteConfig } from "@/siteConfig";

export function Team({ team }: { team: Dictionary["team"] }) {
  const { founders, professors, instructors } = siteConfig.team;
  const groups = [
    { title: team.professors, names: professors },
    { title: team.instructors, names: instructors }
  ];

  return (
    <section id="equipa" aria-labelledby="equipa-titulo" className="py-24 lg:py-32">
      <div className="shell">
        <div data-reveal>
          <SectionLabel>{team.eyebrow}</SectionLabel>
          <h2 id="equipa-titulo" className="title-section mt-5 max-w-3xl">
            {team.title}
          </h2>
        </div>

        <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:mt-16">
          {founders.map((founder, index) => (
            <li
              key={founder.name}
              data-reveal
              style={delay(index * 120)}
              className="card p-8 transition-[transform,box-shadow] duration-500 ease-soft hover:-translate-y-1 hover:shadow-soft lg:p-10"
            >
              <p className="eyebrow">{team.founderRole}</p>
              <h3 className="display mt-4 text-4xl sm:text-5xl">{founder.name}</h3>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <p className="flex items-center gap-3 text-[15px] font-semibold">
                  <span
                    aria-hidden="true"
                    className="flex h-3 w-11 items-center justify-end gap-0.5 rounded-sm bg-ink px-1 ring-1 ring-line-strong/60"
                  >
                    {Array.from({ length: founder.belt }, (_, i) => (
                      <span key={i} className="h-full w-0.5 bg-white" />
                    ))}
                  </span>
                  {team.belt(founder.belt)}
                </p>
                <a
                  href={founder.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-fg"
                >
                  Instagram
                  <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {groups.map((group) => (
            <div key={group.title} data-reveal>
              <h3 className="eyebrow">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.names.map((name) => (
                  <li key={name} className="rounded-full border border-line px-5 py-2.5 font-semibold">
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
