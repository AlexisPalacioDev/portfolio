import { motion } from 'framer-motion';

interface SitePreviewProps {
  url?: string;
  fallbackImage?: string;
  title: string;
}

function getPreviewImage(url?: string, width = 800) {
  if (!url) return null;
  try {
    const u = new URL(url.startsWith('http') ? url : `https://${url}`);
    // WordPress mShots service – free website previews
    return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(u.toString())}?w=${width}`;
  } catch {
    return null;
  }
}

export default function SitePreview({ url, fallbackImage, title }: SitePreviewProps) {
  const preview = getPreviewImage(url);
  const imgSrc = preview || fallbackImage || undefined;

  return (
    <div className="relative w-full h-48 neo-inset rounded-[var(--neo-radius)] overflow-hidden">
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={`Vista previa de ${title}`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="w-full h-full grid place-items-center" style={{ color: 'var(--neo-muted)' }}>
          Sin vista previa
        </div>
      )}
      {url && (
        <motion.a
          href={url.startsWith('http') ? url : `https://${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-end justify-end p-2"
          whileHover={{ scale: 1.0 }}
        >
          <span className="neo-chip neo-chip-sm">Abrir</span>
        </motion.a>
      )}
    </div>
  );
}

