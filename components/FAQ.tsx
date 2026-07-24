import { SectionIntro } from "@/components/SectionIntro";
import { siteConfig } from "@/siteConfig";

export function FAQ() {
  return (
    <section className="bg-paper py-20 text-ink sm:py-24">
      <div className="section-shell">
        <SectionIntro
          eyebrow="FAQ"
          title="Perguntas frequentes antes do primeiro treino"
          text="Respostas diretas para reduzir dúvidas e ajudar novos alunos a tomar a primeira decisão."
          tone="light"
        />
        <div className="mt-12 grid gap-3 lg:grid-cols-2">
          {siteConfig.faqs.map((faq) => (
            <details key={faq.question} className="card-light p-5">
              <summary className="cursor-pointer text-base font-black marker:text-ember">
                {faq.question}
              </summary>
              <p className="mt-4 leading-7 text-neutral-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
