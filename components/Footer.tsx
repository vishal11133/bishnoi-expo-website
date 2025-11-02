import { useTranslations } from 'next-intl';
import { Link } from '@/lib/routing';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  return (
    <footer className="bg-primary-dark text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Bishnoi Expo</h3>
            <p className="text-neutral-200 text-sm">{t('description')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-neutral-200 hover:text-accent-light text-sm transition-colors"
                >
                  {tNav('home')}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-neutral-200 hover:text-accent-light text-sm transition-colors"
                >
                  {tNav('about')}
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-neutral-200 hover:text-accent-light text-sm transition-colors"
                >
                  {tNav('events')}
                </Link>
              </li>
              <li>
                <Link
                  href="/timeline"
                  className="text-neutral-200 hover:text-accent-light text-sm transition-colors"
                >
                  {tNav('timeline')}
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-neutral-200 hover:text-accent-light text-sm transition-colors"
                >
                  {tNav('register')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('contact')}</h3>
            <div className="space-y-4">
              <a
                href="mailto:info@bishnoiexpo.com"
                className="flex items-center space-x-2 text-neutral-200 hover:text-accent-light text-sm transition-colors"
              >
                <Mail size={18} />
                <span>info@bishnoiexpo.com</span>
              </a>
              <div className="flex space-x-4 mt-4">
                <a
                  href="#"
                  className="text-neutral-200 hover:text-accent-light transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-neutral-200 hover:text-accent-light transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-neutral-200 hover:text-accent-light transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light mt-8 pt-8 text-center text-neutral-200 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Bishnoi Global Business Expo. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}

