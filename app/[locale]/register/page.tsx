import { useTranslations } from 'next-intl';
import RegistrationForm from '@/components/RegistrationForm';

export default function RegisterPage() {
  const t = useTranslations('register');

  return (
    <div className="py-16 md:py-24 bg-gradient-to-b from-neutral-50 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {t('title')}
            </h1>
            <p className="text-xl text-neutral-700">
              {t('subtitle')}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <RegistrationForm />
          </div>

          <div className="mt-8 text-center text-neutral-600 text-sm">
            <p>
              By registering, you agree to receive updates about the Bishnoi Global Business Expo 2026.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

