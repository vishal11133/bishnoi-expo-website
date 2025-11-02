# Bishnoi Global Business Expo Website

A modern, multilingual website for the Bishnoi Global Business Expo 2026, built with Next.js 14+, TypeScript, Tailwind CSS, and Supabase.

## Features

- 🌐 **Multilingual Support**: Hindi and English with seamless language switching
- 📅 **Event Timeline**: Beautiful interactive timeline showing the 3-day expo schedule
- 🎯 **Event Showcase**: Detailed pages for all event types (Idea Pitching, Awards, Cultural, Speeches, Business Fair)
- 📝 **Registration System**: Early interest registration with Supabase integration
- 🎨 **Modern UI/UX**: Professional design with smooth animations and responsive layout
- ♿ **Accessible**: Built with accessibility best practices

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **i18n**: next-intl
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- A Supabase project (sign up at [supabase.com](https://supabase.com))

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bishnoi-expo-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:

Copy `.env.local.example` to `.env.local` and fill in your Supabase credentials:
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Set up the database:

Run the following SQL in your Supabase SQL Editor:

```sql
CREATE TABLE registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT NOT NULL,
  organization TEXT,
  registration_type TEXT NOT NULL DEFAULT 'early_interest',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (optional, adjust policies as needed)
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (adjust as needed for your use case)
CREATE POLICY "Allow public inserts" ON registrations
  FOR INSERT
  WITH CHECK (true);

-- Create index on email for faster lookups
CREATE INDEX idx_registrations_email ON registrations(email);
```

5. Run the development server:

```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/app
  /[locale]              # Internationalized routes
    /page.tsx            # Home page
    /about/page.tsx      # About page
    /events/page.tsx     # Events page
    /timeline/page.tsx   # Timeline page
    /register/page.tsx   # Registration page
  /api                   # API routes
    /register/route.ts   # Registration API endpoint
  /styles                # Global styles
/components              # Reusable components
  /Header.tsx
  /Footer.tsx
  /LanguageToggle.tsx
  /EventCard.tsx
  /Timeline.tsx
  /RegistrationForm.tsx
/messages                # Translation files
  /en.json
  /hi.json
/lib                     # Utilities
  /supabase.ts          # Supabase client
  /routing.ts           # i18n routing config
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add your environment variables in the Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Self-hosted Node.js server

## Future Enhancements

- Admin panel for managing registrations
- Stall booking system
- Payment integration for stall rentals
- Email notifications
- Advanced analytics and reporting
- Mobile app (optional)

## License

This project is private and proprietary.

## Support

For questions or issues, please contact the development team.

