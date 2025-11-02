import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, organization } = body;

    // Validation
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('registrations')
      .insert([
        {
          name: name.trim(),
          email: null,
          phone: phone.trim(),
          organization: organization?.trim() || null,
          registration_type: 'early_interest',
        },
      ])
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { error: error.message || 'Registration failed' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Registration successful', data },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

