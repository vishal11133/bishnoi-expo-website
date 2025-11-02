'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/routing';
import { ArrowRight, Trophy, Lightbulb, Music, Mic, Store } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const t = useTranslations('home');

  const benefits = [
    {
      icon: Store,
      title: t('benefits.showcase'),
      description: t('benefits.showcaseDesc'),
      color: 'bg-primary/10 text-primary',
    },
    {
      icon: Lightbulb,
      title: t('benefits.launch'),
      description: t('benefits.launchDesc'),
      color: 'bg-accent/10 text-accent-dark',
    },
    {
      icon: Trophy,
      title: t('benefits.learn'),
      description: t('benefits.learnDesc'),
      color: 'bg-primary-light/10 text-primary-light',
    },
    {
      icon: ArrowRight,
      title: t('benefits.connect'),
      description: t('benefits.connectDesc'),
      color: 'bg-accent-light/10 text-accent-dark',
    },
  ];

  const featuredEvents = [
    {
      icon: Lightbulb,
      title: 'Idea Pitching',
      href: '/events#idea-pitching',
      gradient: 'from-primary to-primary-light',
    },
    {
      icon: Trophy,
      title: 'Awards & Recognition',
      href: '/events#awards',
      gradient: 'from-accent-dark to-accent',
    },
    {
      icon: Music,
      title: 'Cultural Events',
      href: '/events#cultural',
      gradient: 'from-primary-light to-accent-light',
    },
    {
      icon: Mic,
      title: 'Keynote Speeches',
      href: '/events#speeches',
      gradient: 'from-primary to-accent',
    },
    {
      icon: Store,
      title: 'Business Fair',
      href: '/events#business-fair',
      gradient: 'from-accent to-accent-light',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-accent-light text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMwIDMuMzE0LTIuNjg2IDYtNiA2cy02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNnoiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuMSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-white/90">
              {t('subtitle')}
            </p>
            <p className="text-lg md:text-xl mb-8 text-white/80">
              {t('dates')}
            </p>
            <p className="text-lg mb-10 text-white/90 max-w-2xl mx-auto">
              {t('heroDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {t('cta')}
              </Link>
              <Link
                href="/about"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors border-2 border-white/30"
              >
                {t('learnMore')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              {t('aboutTitle')}
            </h2>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              {t('aboutDescription')}
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              {t('mission')}
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              {t('missionText')}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            {t('benefits.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className={`w-12 h-12 rounded-lg ${benefit.color} flex items-center justify-center mb-4`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t('eventsTitle')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link
                    href={event.href}
                    className={`block bg-gradient-to-br ${event.gradient} p-6 rounded-xl text-white hover:shadow-xl transition-shadow h-full`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <Icon size={32} />
                      <ArrowRight size={20} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  </Link>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/events"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark font-semibold text-lg"
            >
              <span>{t('viewAllEvents')}</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
