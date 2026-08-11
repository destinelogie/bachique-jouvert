'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { createClient } from '@supabase/supabase-js';
import { User, Shirt, Check } from 'lucide-react';

// Initialize Client integration mapping directly
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

export default function WaitlistPage() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', section: 'Undecided', size: 'M', requests: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Save directly to your active Supabase Profiles / Waitlist system layout
    const { error } = await supabase.from('profiles').insert([
      {
        full_name: `${formData.firstName} ${formData.lastName}`,
        phone_number: formData.phone,
        emergency_contact_name: formData.section, // Contextual routing fallback
        emergency_contact_phone: formData.size
      }
    ]);

    setLoading(false);
    if (!error) {
      setSubmitted(true);
    } else {
      alert('Error connecting with backend system: ' + error.message);
    }
  };

  return (
    <div className="bg-[#08070D] text-white min-h-screen flex flex-col justify-between">
      <nav className="h-20 border-b border-white/10 flex items-center px-4">
        <Link href="/"><Image src="/image_8.png" alt="Logo" width={130} height={50} className="object-contain" /></Link>
      </nav>

      <main className="max-w-2xl mx-auto w-full px-4 py-12 flex-grow">
        {!submitted ? (
          <div className="bg-[#13111C] border border-white/10 rounded-3xl p-6 sm:p-10 space-y-6 shadow-2xl">
            <div className="text-center space-y-2">
              <h1 className="text-2xl sm:text-4xl font-black uppercase">Join the Masquerader Waitlist</h1>
              <p className="text-xs text-gray-400">Lock down dynamic VIP priorities before public section configuration packages drop.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" required placeholder="First Name" onChange={e => setFormData({...formData, firstName: e.target.value})} className="w-full bg-[#08070D] border border-white/10 rounded-xl p-3.5 text-sm" />
                <input type="text" required placeholder="Last Name" onChange={e => setFormData({...formData, lastName: e.target.value})} className="w-full bg-[#08070D] border border-white/10 rounded-xl p-3.5 text-sm" />
              </div>
              <input type="email" required placeholder="Email Address" onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-[#08070D] border border-white/10 rounded-xl p-3.5 text-sm" />
              <input type="tel" required placeholder="WhatsApp Number" onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-[#08070D] border border-white/10 rounded-xl p-3.5 text-sm" />
              
              <div className="grid sm:grid-cols-2 gap-4">
                <select onChange={e => setFormData({...formData, section: e.target.value})} className="w-full bg-[#08070D] border border-white/10 rounded-xl p-3.5 text-sm text-gray-300">
                  <option value="Magenta Rage">Magenta Rage</option>
                  <option value="Violet Volt">Violet Volt</option>
                  <option value="Cyan Eclipse">Cyan Eclipse VIP</option>
                </select>
                <select onChange={e => setFormData({...formData, size: e.target.value})} className="w-full bg-[#08070D] border border-white/10 rounded-xl p-3.5 text-sm text-gray-300">
                  <option value="S">Small (S)</option>
                  <option value="M">Medium (M)</option>
                  <option value="L">Large (L)</option>
                  <option value="XL">Extra Large (XL)</option>
                </select>
              </div>

              <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-[#FF2A85] via-[#8B3AEE] to-[#4CC9F0] text-white font-black py-4 rounded-full text-sm uppercase tracking-widest">
                {loading ? 'Securing Spot...' : 'Join VIP Waitlist Now'}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-12 space-y-4 bg-[#13111C] border border-white/10 rounded-3xl p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-[#FF2A85] to-[#8B3AEE] rounded-full flex items-center justify-center mx-auto text-white"><Check className="w-8 h-8" /></div>
            <h3 className="text-2xl font-black uppercase">You're On The List!</h3>
            <p className="text-sm text-gray-300">Thank you, {formData.firstName}! Early registration options will route to {formData.email} soon.</p>
            <Link href="/" className="inline-block mt-4 text-xs border border-white/20 px-4 py-2 rounded-full uppercase">Back to Main Site</Link>
          </div>
        )}
      </main>
    </div>
  );
}
