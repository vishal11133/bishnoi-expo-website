import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/lib/routing';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  return {
    title: 'Bishnoi Global Business Expo 2026',
    description: 'Empowering the Bishnoi community for business excellence. Join us for a transformative three-day expo in March 2026.',
    keywords: 'Bishnoi, Business Expo, Expo 2026, Business Fair, Entrepreneurship',
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  type Locale = (typeof routing.locales)[number];
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} dir="ltr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
