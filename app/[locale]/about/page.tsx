import { useTranslations } from 'next-intl';
import { Link } from '@/lib/routing';
import { Target, Users, TrendingUp, Award } from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations('home');

  const goals = [
    {
      icon: Users,
      title: 'Community Unity',
      description: 'Bringing together the Bishnoi community to support each other in business growth and development.',
    },
    {
      icon: TrendingUp,
      title: 'Business Growth',
      description: 'Providing tools, knowledge, and opportunities for businesses to scale and succeed.',
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Celebrating achievements and inspiring others through awards and recognition programs.',
    },
    {
      icon: Target,
      title: 'Networking',
      description: 'Creating valuable connections that lead to partnerships, collaborations, and mutual growth.',
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
            {t('aboutTitle')}
          </h1>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              {t('aboutDescription')}
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {t('missionText')}
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">
              {t('mission')}
            </h2>
            <p className="text-neutral-700 leading-relaxed">
              {t('missionText')}
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Our Goals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {goals.map((goal, index) => {
                const Icon = goal.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {goal.title}
                    </h3>
                    <p className="text-neutral-600">{goal.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/register"
              className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t('cta')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

