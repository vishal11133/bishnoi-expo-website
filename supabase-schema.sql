-- Bishnoi Expo Website Database Schema
-- Run this in your Supabase SQL Editor

-- Create registrations table
CREATE TABLE IF NOT EXISTS registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT NOT NULL,
  organization TEXT,
  registration_type TEXT NOT NULL DEFAULT 'early_interest',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_registrations_email ON registrations(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_registrations_created_at ON registrations(created_at DESC);

-- Enable Row Level Security
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts (for registration form)
-- You may want to restrict this further based on your requirements
CREATE POLICY "Allow public inserts" ON registrations
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow reads (optional - remove if you don't want public reads)
-- CREATE POLICY "Allow public reads" ON registrations
--   FOR SELECT
--   USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_registrations_updated_at
  BEFORE UPDATE ON registrations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Future: Add columns for stall booking (when ready)
-- ALTER TABLE registrations ADD COLUMN stall_preference TEXT;
-- ALTER TABLE registrations ADD COLUMN event_interests TEXT[];
-- ALTER TABLE registrations ADD COLUMN status TEXT DEFAULT 'pending';

