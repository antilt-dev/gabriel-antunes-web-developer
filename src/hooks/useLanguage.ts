import { useLocation } from 'react-router-dom';
import { translations, type Lang, type Translations } from '../lib/i18n';

export function useLanguage(): { lang: Lang; t: Translations } {
  const location = useLocation();
  const lang: Lang = location.pathname.startsWith('/pt-br') ? 'pt-br' : 'en';
  return { lang, t: translations[lang] };
}
