import { useLanguage } from '../utils/useLanguage';
import translations from '../data/translations';

export default function Footer() {
  const lang = useLanguage();
  const footer = translations[lang].footer;

  return (
    <footer className="py-8">
      <div className="container mx-auto px-6">
        <div className="neo-inset p-6 rounded-[var(--neo-radius-lg)]">
          <p className="text-center" style={{ color: 'var(--neo-muted)' }}>
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
