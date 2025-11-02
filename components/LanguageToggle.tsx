'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/lib/routing';
import { Globe } from 'lucide-react';

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'hi' : 'en';
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-1.5 px-2 py-1.5 rounded-md text-sm font-medium transition-all duration-200 border border-neutral-300 hover:border-primary hover:bg-neutral-50"
      aria-label={`Switch to ${locale === 'en' ? 'Hindi' : 'English'}`}
      title={`Switch to ${locale === 'en' ? 'Hindi' : 'English'}`}
    >
      <Globe size={14} className="text-primary flex-shrink-0" />
      <div className="flex items-center gap-1">
        <span
          className={`px-1.5 py-0.5 rounded text-xs font-semibold transition-all duration-200 ${
            locale === 'en'
              ? 'text-primary bg-primary/10'
              : 'text-neutral-400'
          }`}
        >
          EN
        </span>
        <span className="text-neutral-300">/</span>
        <span
          className={`px-1.5 py-0.5 rounded text-xs font-semibold transition-all duration-200 ${
            locale === 'hi'
              ? 'text-primary bg-primary/10'
              : 'text-neutral-400'
          }`}
        >
          हिं
        </span>
      </div>
    </button>
  );
}

