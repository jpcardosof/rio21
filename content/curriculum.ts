import { methodEn } from "./curriculum.en";
import { methodPt } from "./curriculum.pt";
import type { MethodDictionary } from "./curriculum.types";
import type { Locale } from "./types";

const methods: Record<Locale, MethodDictionary> = { pt: methodPt, en: methodEn };

export function getMethod(locale: Locale): MethodDictionary {
  return methods[locale];
}
