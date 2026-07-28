"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/siteConfig";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const email = String(formData.get("email") ?? "");
    const pole = String(formData.get("pole") ?? "");
    const interest = String(formData.get("interest") ?? "");
    const message = String(formData.get("message") ?? "");
    const whatsappMessage = [
      "Olá Rio21! Gostaria de marcar uma aula experimental.",
      "",
      `Nome: ${name}`,
      `Telefone: ${phone}`,
      email ? `Email: ${email}` : "",
      `Unidade: ${pole}`,
      `Interesse: ${interest}`,
      message ? `Mensagem: ${message}` : ""
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${siteConfig.contacts.whatsapp}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.05] p-5 sm:p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-black text-white">
            Nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 min-h-12 w-full rounded-sm border border-white/15 bg-black/30 px-3 text-white placeholder:text-neutral-500"
            placeholder="O teu nome"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-black text-white">
            Telefone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-2 min-h-12 w-full rounded-sm border border-white/15 bg-black/30 px-3 text-white placeholder:text-neutral-500"
            placeholder="+351"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-black text-white">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="mt-2 min-h-12 w-full rounded-sm border border-white/15 bg-black/30 px-3 text-white placeholder:text-neutral-500"
          placeholder="email@exemplo.pt"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="pole" className="text-sm font-black text-white">
            Unidade pretendida
          </label>
          <select
            id="pole"
            name="pole"
            required
            className="mt-2 min-h-12 w-full rounded-sm border border-white/15 bg-black/30 px-3 text-white"
            defaultValue=""
          >
            <option value="" disabled>
              Escolher unidade
            </option>
            {siteConfig.poles.map((pole) => (
              <option key={pole.id} value={pole.shortName}>
                {pole.shortName}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="interest" className="text-sm font-black text-white">
            Interesse
          </label>
          <select
            id="interest"
            name="interest"
            required
            className="mt-2 min-h-12 w-full rounded-sm border border-white/15 bg-black/30 px-3 text-white"
            defaultValue=""
          >
            <option value="" disabled>
              Escolher turma
            </option>
            {siteConfig.trial.interests.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-black text-white">
          Mensagem opcional
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-2 w-full rounded-sm border border-white/15 bg-black/30 px-3 py-3 text-white placeholder:text-neutral-500"
          placeholder="Diz-nos quando queres treinar ou se a aula é para criança/adulto."
        />
      </div>

      <button type="submit" className="button-primary w-full">
        Enviar pedido pelo WhatsApp
      </button>

      {submitted ? (
        <p className="rounded-sm border border-ember/40 bg-ember/10 px-3 py-3 text-sm font-bold text-ember">
          O WhatsApp foi aberto com os dados preenchidos. Se não abriu,{" "}
          <a
            href={siteConfig.contacts.whatsappUrl}
            className="underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            fala diretamente com a Rio21
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
