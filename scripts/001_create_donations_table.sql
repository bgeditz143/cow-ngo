-- Create donations table for storing donation details
CREATE TABLE IF NOT EXISTS public.donations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  donor_name TEXT NOT NULL,
  donor_email TEXT,
  donor_mobile TEXT,
  donor_address TEXT,
  is_anonymous BOOLEAN DEFAULT false,
  payment_amount DECIMAL NOT NULL,
  payment_screenshot_url TEXT NOT NULL,
  payment_method TEXT NOT NULL, -- 'upi' or 'bank_transfer'
  status TEXT DEFAULT 'pending', -- pending, verified, rejected
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert donations (no auth required for donations)
CREATE POLICY "Anyone can submit donations"
  ON public.donations FOR INSERT
  WITH CHECK (true);

-- Only admins can view all donations (for now, allow all to view)
CREATE POLICY "Anyone can view donations"
  ON public.donations FOR SELECT
  USING (true);

-- Create an index for faster queries
CREATE INDEX idx_donations_created_at ON public.donations(created_at DESC);
CREATE INDEX idx_donations_status ON public.donations(status);
