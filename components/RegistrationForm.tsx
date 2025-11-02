'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { supabase } from '@/lib/supabase';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function RegistrationForm() {
  const t = useTranslations('register.form');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    organization: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage('Name is required');
      return false;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Phone number is required');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    if (!validateForm()) {
      setStatus('error');
      return;
    }

    try {
      const { error } = await supabase
        .from('registrations')
        .insert([
          {
            name: formData.name.trim(),
            email: null,
            phone: formData.phone.trim(),
            organization: formData.organization.trim() || null,
            registration_type: 'early_interest',
          },
        ]);

      if (error) {
        setErrorMessage(error.message || t('errorMessage'));
        setStatus('error');
        return;
      }

      setStatus('success');
      setFormData({
        name: '',
        phone: '',
        organization: '',
      });
    } catch (err) {
      console.error('Registration error:', err);
      setErrorMessage(t('errorMessage'));
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
        <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">{t('success')}</h3>
        <p className="text-green-700">{t('successMessage')}</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
        >
          Register Another Person
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
          {t('name')} *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={t('namePlaceholder')}
          required
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
          {t('phone')} *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder={t('phonePlaceholder')}
          required
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
        />
      </div>

      <div>
        <label htmlFor="organization" className="block text-sm font-medium text-neutral-700 mb-2">
          {t('organization')}
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          placeholder={t('organizationPlaceholder')}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
        />
      </div>

      {status === 'error' && errorMessage && (
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-red-700 text-sm">{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-primary hover:bg-primary-dark text-white px-6 py-4 rounded-lg font-semibold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>{t('submitting')}</span>
          </>
        ) : (
          <span>{t('submit')}</span>
        )}
      </button>
    </form>
  );
}

