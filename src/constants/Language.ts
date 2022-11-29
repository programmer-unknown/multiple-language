import { TLanguage, TLanguageKey } from "../typings/Language";

export const language: { code: keyof TLanguage; country: string }[] = [
  {
    code: "en",
    country: "English",
  },
  {
    code: "id",
    country: "Indonesia",
  },
];
const languages: Record<TLanguageKey, TLanguage> = {
  changeLanguage: {
    en: "Change Language",
    id: "Ubah Bahasa",
  },
};

export default languages;
