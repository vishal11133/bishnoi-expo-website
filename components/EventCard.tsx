'use client';

import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

type EventCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  delay?: number;
};

export default function EventCard({
  icon: Icon,
  title,
  description,
  gradient,
  delay = 0,
}: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ scale: 1.02 }}
      className={`bg-gradient-to-br ${gradient} p-8 rounded-xl text-white shadow-lg hover:shadow-xl transition-shadow`}
    >
      <div className="mb-4">
        <Icon size={40} />
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-white/90 leading-relaxed">{description}</p>
    </motion.div>
  );
}

