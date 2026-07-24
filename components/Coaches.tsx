import Image from "next/image";
import { SectionIntro } from "@/components/SectionIntro";
import { siteConfig } from "@/siteConfig";

type TeamMember = {
  id: string;
  name: string;
  image?: string;
  imageAlt?: string;
};

function EmptyPortrait() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center border border-dashed border-black/15 bg-[linear-gradient(145deg,#f5f5f5,#e5e5e5)] text-neutral-400">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="8" r="3.25" />
        <path d="M5.5 19c.7-3.4 3-5.2 6.5-5.2s5.8 1.8 6.5 5.2" />
      </svg>
      <span className="mt-2 text-[10px] font-black uppercase tracking-[0.18em]">
        Foto em breve
      </span>
    </div>
  );
}

function MemberCard({
  member,
  featured = false
}: {
  member: TeamMember;
  featured?: boolean;
}) {
  return (
    <article
      className={`group overflow-hidden rounded-lg border bg-white shadow-sm ${
        featured ? "border-gold/45" : "border-black/10"
      }`}
    >
      <div
        className={`relative overflow-hidden bg-neutral-100 ${
          featured ? "aspect-[4/3] sm:aspect-[5/4]" : "aspect-square"
        }`}
      >
        {member.image ? (
          <Image
            src={member.image}
            alt={member.imageAlt ?? member.name}
            fill
            className="image-zoom object-cover object-top"
            sizes={
              featured
                ? "(min-width: 768px) 24rem, 80vw"
                : "(min-width: 1024px) 11rem, (min-width: 640px) 28vw, 44vw"
            }
          />
        ) : (
          <EmptyPortrait />
        )}
        {featured && (
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent" />
        )}
      </div>
      <div className={`text-center ${featured ? "px-5 py-4" : "px-3 py-3"}`}>
        <h4
          className={`font-black text-ink ${
            featured ? "text-xl" : "text-sm sm:text-base"
          }`}
        >
          {member.name}
        </h4>
      </div>
    </article>
  );
}

function TierLabel({
  index,
  title,
  detail
}: {
  index: string;
  title: string;
  detail: string;
}) {
  return (
    <div className="mb-5 text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 shadow-sm">
        <span className="text-ember">{index}</span>
        {detail}
      </span>
      <h3 className="mt-2 text-2xl font-black text-ink sm:text-3xl">{title}</h3>
    </div>
  );
}

function TierConnector() {
  return (
    <div aria-hidden="true" className="mx-auto flex h-12 w-24 items-center justify-center">
      <span className="h-full w-px bg-gradient-to-b from-gold via-ember to-steel" />
    </div>
  );
}

export function Coaches() {
  const { team } = siteConfig;

  return (
    <section
      id="professores"
      className="relative overflow-hidden bg-paper py-20 text-ink sm:py-24"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#c1121f,#c9a227,#174c72)]" />
      <div className="section-shell relative">
        <SectionIntro
          eyebrow="A nossa equipa"
          title="Uma equipa, várias frentes"
          text="Da liderança no tatame ao trabalho nos bastidores, esta é a estrutura atual da Rio21."
          tone="light"
        />

        <div className="mx-auto mt-14 max-w-6xl">
          <TierLabel index="01" title="Fundadores" detail="Liderança" />
          <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
            {team.founders.map((member) => (
              <MemberCard key={member.id} member={member} featured />
            ))}
          </div>

          <TierConnector />
          <TierLabel index="02" title="Professores" detail="Equipa técnica" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {team.professors.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>

          <TierConnector />
          <TierLabel index="03" title="Instrutores" detail="Tatame" />
          <div className="mx-auto grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
            {team.instructors.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>

          <TierConnector />
          <TierLabel index="04" title="Operações" detail="Bastidores" />
          <div className="mx-auto grid max-w-4xl items-start gap-4 md:grid-cols-2">
            {team.departments.map((department) => (
              <section
                key={department.id}
                className="rounded-xl border border-black/10 bg-neutral-50 p-4 sm:p-5"
              >
                <h4 className="mb-4 border-l-2 border-ember pl-3 text-lg font-black text-ink">
                  {department.title}
                </h4>
                <div
                  className={`grid gap-3 ${
                    department.members.length > 1 ? "grid-cols-2" : "max-w-[12rem]"
                  }`}
                >
                  {department.members.map((member) => (
                    <MemberCard key={member.id} member={member} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
