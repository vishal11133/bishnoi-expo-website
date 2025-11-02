'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

type TimelineEvent = {
  time: string;
  title: string;
  description: string;
  type: 'event' | 'break';
};

type DayEvents = {
  day: string;
  date: string;
  events: TimelineEvent[];
};

export default function Timeline() {
  const t = useTranslations('timeline');

  const timelineData: DayEvents[] = [
    {
      day: t('day1'),
      date: 'March 1, 2026',
      events: [
        {
          time: '09:00 - 10:00',
          title: 'Opening Ceremony',
          description: 'Welcome address and inauguration of the expo',
          type: 'event',
        },
        {
          time: '10:00 - 11:30',
          title: 'Keynote Speech',
          description: 'Inspirational talk by industry leaders',
          type: 'event',
        },
        {
          time: '11:30 - 12:00',
          title: 'Networking Break',
          description: 'Coffee and networking session',
          type: 'break',
        },
        {
          time: '12:00 - 14:00',
          title: 'Business Fair Opens',
          description: 'Product showcases and business stalls open',
          type: 'event',
        },
        {
          time: '14:00 - 15:30',
          title: 'Idea Pitching Session',
          description: 'Entrepreneurs present innovative business ideas',
          type: 'event',
        },
        {
          time: '15:30 - 16:00',
          title: 'Break',
          description: 'Refreshments',
          type: 'break',
        },
        {
          time: '16:00 - 18:00',
          title: 'Cultural Events',
          description: 'Traditional performances and cultural showcase',
          type: 'event',
        },
      ],
    },
    {
      day: t('day2'),
      date: 'March 2, 2026',
      events: [
        {
          time: '09:00 - 10:30',
          title: 'Business Workshops',
          description: 'Hands-on learning sessions on business strategies',
          type: 'event',
        },
        {
          time: '10:30 - 11:00',
          title: 'Break',
          description: 'Networking break',
          type: 'break',
        },
        {
          time: '11:00 - 13:00',
          title: 'Business Fair Continues',
          description: 'More product showcases and business interactions',
          type: 'event',
        },
        {
          time: '13:00 - 14:00',
          title: 'Lunch Break',
          description: 'Lunch and networking',
          type: 'break',
        },
        {
          time: '14:00 - 16:00',
          title: 'Expert Panel Discussions',
          description: 'Interactive Q&A with business experts',
          type: 'event',
        },
        {
          time: '16:00 - 16:30',
          title: 'Break',
          description: 'Refreshments',
          type: 'break',
        },
        {
          time: '16:30 - 18:00',
          title: 'Idea Pitching Finals',
          description: 'Final round of idea pitching competition',
          type: 'event',
        },
      ],
    },
    {
      day: t('day3'),
      date: 'March 3, 2026',
      events: [
        {
          time: '09:00 - 11:00',
          title: 'Business Fair - Final Day',
          description: 'Last day to explore business opportunities',
          type: 'event',
        },
        {
          time: '11:00 - 12:00',
          title: 'Awards & Recognition Ceremony',
          description: 'Celebrating excellence in business achievements',
          type: 'event',
        },
        {
          time: '12:00 - 13:00',
          title: 'Lunch Break',
          description: 'Lunch and final networking',
          type: 'break',
        },
        {
          time: '13:00 - 15:00',
          title: 'Closing Keynote',
          description: 'Final inspirational speech and wrap-up',
          type: 'event',
        },
        {
          time: '15:00 - 16:00',
          title: 'Cultural Grand Finale',
          description: 'Spectacular cultural performances',
          type: 'event',
        },
        {
          time: '16:00 - 17:00',
          title: 'Closing Ceremony',
          description: 'Vote of thanks and closing remarks',
          type: 'event',
        },
      ],
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-neutral-700">{t('subtitle')}</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {timelineData.map((day, dayIndex) => (
            <motion.div
              key={dayIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: dayIndex * 0.2 }}
              className="mb-12"
            >
              <div className="bg-gradient-to-r from-primary to-primary-light text-white p-6 rounded-t-xl">
                <div className="flex items-center space-x-3 mb-2">
                  <Calendar size={24} />
                  <h2 className="text-2xl md:text-3xl font-bold">{day.day}</h2>
                </div>
                <p className="text-white/90">{day.date}</p>
              </div>

              <div className="bg-white rounded-b-xl shadow-lg overflow-hidden">
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>

                  {day.events.map((event, eventIndex) => (
                    <motion.div
                      key={eventIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: eventIndex * 0.1 }}
                      className={`relative pl-24 pr-6 py-6 ${
                        eventIndex !== day.events.length - 1 ? 'border-b border-neutral-200' : ''
                      } ${event.type === 'break' ? 'bg-neutral-50' : ''}`}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-6 top-8 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md z-10"></div>

                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center space-x-2 text-primary font-semibold">
                            <Clock size={18} />
                            <span className="text-sm md:text-base">{event.time}</span>
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h3 className={`text-lg md:text-xl font-bold mb-2 ${
                            event.type === 'break' ? 'text-neutral-600' : 'text-primary'
                          }`}>
                            {event.title}
                          </h3>
                          <p className="text-neutral-600 text-sm md:text-base">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

