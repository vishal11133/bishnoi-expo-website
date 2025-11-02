'use client';

import { useTranslations } from 'next-intl';
import EventCard from '@/components/EventCard';
import { Lightbulb, Trophy, Music, Mic, Store } from 'lucide-react';

export default function EventsPage() {
  const t = useTranslations('events');

  const events = [
    {
      id: 'idea-pitching',
      icon: Lightbulb,
      title: t('ideaPitching.title'),
      description: t('ideaPitching.description'),
      gradient: 'from-primary to-primary-light',
    },
    {
      id: 'awards',
      icon: Trophy,
      title: t('awards.title'),
      description: t('awards.description'),
      gradient: 'from-accent-dark to-accent',
    },
    {
      id: 'cultural',
      icon: Music,
      title: t('cultural.title'),
      description: t('cultural.description'),
      gradient: 'from-primary-light to-accent-light',
    },
    {
      id: 'speeches',
      icon: Mic,
      title: t('speeches.title'),
      description: t('speeches.description'),
      gradient: 'from-primary to-accent',
    },
    {
      id: 'business-fair',
      icon: Store,
      title: t('businessFair.title'),
      description: t('businessFair.description'),
      gradient: 'from-accent to-accent-light',
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-neutral-700 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <div key={event.id} id={event.id}>
              <EventCard
                icon={event.icon}
                title={event.title}
                description={event.description}
                gradient={event.gradient}
                delay={index * 0.1}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

