import { useLocation } from 'react-router-dom';
import { translations, type Lang } from '../lib/i18n';

export type TranslationValues = typeof translations['en'];

export function useLanguage(): { lang: Lang; t: TranslationValues } {
  const location = useLocation();
  const lang: Lang = location.pathname.startsWith('/pt-br') ? 'pt-br' : 'en';
  return { lang, t: translations[lang] as TranslationValues };
}
