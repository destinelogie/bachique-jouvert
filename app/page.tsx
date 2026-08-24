'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Wine, ShieldHalf, SprayCan, Utensils, Zap, Menu, X, ShoppingBag, ArrowUpRight } from 'lucide-react';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });

  useEffect(() => {
    const launchTarget = new Date("November 15, 2026 00:00:00").getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = launchTarget - now;
      if (diff <= 0) {
        clearInterval(interval);
        return;
      }
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days: d < 10 ? `0${d}` : `${d}`,
        hours: h < 10 ? `0${h}` : `${h}`,
        minutes: m < 10 ? `0${m}` : `${m}`,
        seconds: s < 10 ? `0${s}` : `${s}`
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#08070D] text-white min-h-screen font-sans antialiased flex flex-col justify-between selection:bg-[#FF2A85]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-[999] bg-[#08070D]/95 backdrop-blur-md border-b border-white/10 h-auto flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="./IMG_0979.png" alt="Bachique J'ouvert Logo" className="h-24 sm:h-32 w-auto object-contain max-h-28 drop-shadow-[0_0_10px_rgba(255,42,133,0.3)] py-1" />
          </Link>


          <div className="hidden md:flex items-center space-x-8 font-medium text-sm text-gray-300">
            <a href="#home" className="hover:text-[#FF2A85] transition">Home</a>
            <a href="#about" className="hover:text-[#FF2A85] transition">About</a>
            <Link href="/sections" className="hover:text-[#FF2A85] transition">Sections</Link>
            <Link href="/waitlist" className="text-[#FF2A85] font-bold flex items-center space-x-1.5 hover:opacity-85 transition">
              <span>Waitlist</span>
              <span className="bg-[#FF2A85]/20 text-[#FF2A85] text-[10px] px-2 py-0.5 rounded-full border border-[#FF2A85]/30 uppercase tracking-wide">Pre-Launch</span>
            </Link>
              {/* Large Main Hero Logo */}
  <div className="my-6 flex justify-center items-center">
    <img 
      src="./IMG_0979.png" 
      alt="Bachique J'ouvert" 
      style={{ height: '140px', width: 'auto' }} 
      className="object-contain drop-shadow-[0_0_25px_rgba(255,42,133,0.4)] transition-transform duration-300 hover:scale-105" 
    />
  </div>

          </div>

          <div className="flex items-center space-x-4">
            <Link href="/waitlist" className="relative p-2 text-gray-300 hover:text-[#FF2A85] transition">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1 right-1 bg-[#FF2A85] text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </Link>
            <Link href="/waitlist" className="hidden sm:inline-block bg-gradient-to-r from-[#FF2A85] via-[#8B3AEE] to-[#4CC9F0] text-white font-bold px-5 py-2 rounded-full text-xs uppercase tracking-wider transition shadow-lg shadow-[#FF2A85]/20">
              Join VIP Waitlist
            </Link>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-gray-300 hover:text-white">
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF2A85]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed top-20 left-0 w-full z-[998] bg-[#08070D] border-b border-white/10 px-4 pt-2 pb-6 space-y-3 md:hidden">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 py-2 border-b border-white/5">Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 py-2 border-b border-white/5">About</a>
          <Link href="/sections" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 py-2 border-b border-white/5">Sections</Link>
          <Link href="/waitlist" onClick={() => setMobileMenuOpen(false)} className="flex justify-between text-[#FF2A85] font-bold py-2 border-b border-white/5">
            <span>Waitlist</span>
            <span className="bg-[#FF2A85] text-white text-xs px-2 py-0.5 rounded-full">VIP Access</span>
          </Link>
        </div>
      )}

      {/* Hero Content */}
      <main className="flex-grow pt-32">
        <section id="home" className="relative min-h-[80vh] flex items-center justify-center px-4 overflow-hidden text-center">
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#FF2A85]/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#8B3AEE]/20 rounded-full blur-[140px] pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto z-10 space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF2A85]/10 text-[#FF2A85] border border-[#FF2A85]/30 text-xs font-bold tracking-widest uppercase">
              Official Pre-Launch Access
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight uppercase leading-none">
              Paint. Powder. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2A85] via-[#8B3AEE] to-[#4CC9F0] drop-shadow-[0_10px_20px_rgba(255,42,133,0.3)]">
                Pure Bacchanal.
              </span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Get ready to take over the streets. Join the priority waitlist to secure your spot for Trinidad's ultimate J'ouvert morning road march experience.
            </p>

            {/* Countdown Container */}
            <div className="py-4">
              <p className="text-xs uppercase tracking-widest text-[#4CC9F0] mb-3 font-semibold">Official Band Launch Countdown</p>
              <div className="grid grid-cols-4 gap-3 max-w-md mx-auto">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="bg-[#13111C] border border-[#8B3AEE]/20 rounded-2xl p-3 shadow-lg">
                    <span className="block text-2xl sm:text-4xl font-black text-[#FF2A85]">{value}</span>
                    <span className="text-[10px] text-gray-400 uppercase font-semibold">{unit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/waitlist" className="w-full sm:w-auto bg-gradient-to-r from-[#FF2A85] via-[#8B3AEE] to-[#4CC9F0] text-white font-black px-8 py-4 rounded-full shadow-lg hover:scale-105 transition transform uppercase tracking-wider text-sm">
                Join VIP Waitlist
              </Link>
              <Link href="/sections" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-full transition text-sm">
                Preview Band Sections
              </Link>
            </div>
          </div>
        </section>

        {/* Perks Grid */}
        <section id="about" className="py-20 px-4 bg-black/40 border-y border-white/10">
          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#13111C] border border-white/10 rounded-3xl p-6 text-center group hover:border-[#FF2A85]/50 transition duration-300">
              <Wine className="w-10 h-10 text-[#FF2A85] mx-auto mb-4 group-hover:scale-110 transition" />
              <h3 className="font-bold text-lg mb-2">Unlimited Premium Drinks</h3>
              <p className="text-xs text-gray-400">Fully stocked drink trucks with top-shelf alcohol flowing nonstop.</p>
            </div>
            <div className="bg-[#13111C] border border-white/10 rounded-3xl p-6 text-center group hover:border-[#8B3AEE]/50 transition duration-300">
              <ShieldHalf className="w-10 h-10 text-[#8B3AEE] mx-auto mb-4 group-hover:scale-110 transition" />
              <h3 className="font-bold text-lg mb-2">Tight Security Band</h3>
              <p className="text-xs text-gray-400">Dedicated extraction teams and tight rope security protocols.</p>
            </div>
            <div className="bg-[#13111C] border border-white/10 rounded-3xl p-6 text-center group hover:border-[#4CC9F0]/50 transition duration-300">
              <SprayCan className="w-10 h-10 text-[#4CC9F0] mx-auto mb-4 group-hover:scale-110 transition" />
              <h3 className="font-bold text-lg mb-2">Paint, Powder & Mud</h3>
              <p className="text-xs text-gray-400">Premium non-toxic neon paints and organic mud kits.</p>
            </div>
            <div className="bg-[#13111C] border border-white/10 rounded-3xl p-6 text-center group hover:border-[#FFD700]/50 transition duration-300">
              <Utensils className="w-10 h-10 text-[#FFD700] mx-auto mb-4 group-hover:scale-110 transition" />
              <h3 className="font-bold text-lg mb-2">Post-March Breakfast</h3>
              <p className="text-xs text-gray-400">Hot local Trinidadian breakfast waiting at the cool-down zone.</p>
            </div>
          </div>
        </section>

        {/* 5K Event Entry */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <a href="https://islandetickets.com" target="_blank" rel="noreferrer" className="group block rounded-3xl bg-[#13111C] border border-white/10 hover:border-[#FF2A85]/50 transition p-8 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="h-60 rounded-2xl bg-gradient-to-br from-[#FF2A85]/20 to-[#4CC9F0]/20 flex flex-col items-center justify-center border border-white/10">
                <Zap className="w-16 h-16 text-[#FFD700] mb-2 group-hover:scale-110 transition" />
                <span className="text-2xl font-black uppercase">Bachique 5K Warmup</span>
              </div>
              <div className="space-y-4">
                <span className="text-[#FFD700] text-xs font-semibold uppercase tracking-wider block">Upcoming Pre-Carnival Event</span>
                <h3 className="text-3xl font-extrabold group-hover:text-[#FF2A85] transition">Run, Walk & Soca Warmup</h3>
                <p className="text-gray-400 text-sm">Run, walk, or dance your way across the finish line! All proceeds go toward building the road march infrastructure.</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xs text-gray-400 font-bold">islandetickets.com</span>
                  <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#FF2A85] to-[#8B3AEE] text-white font-bold px-4 py-2 rounded-full text-xs">
                    <span>Get Tickets</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          </a>
        </section>
      </main>

      {/* Footer Section */}
<footer className="border-t border-white/10 bg-[#08070D]/80 backdrop-blur-md pt-12 pb-8 px-4 text-center">
  <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
    
    {/* Footer Logo */}
    <img 
      src="./IMG_0979.png" 
      alt="Bachique J'ouvert Logo" 
      style={{ height: '60px', width: 'auto' }} 
      className="object-contain drop-shadow-[0_0_15px_rgba(255,42,133,0.3)]" 
    />

    {/* Contact Information */}
    <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-300">
      <a 
        href="mailto:bachiquejouvert@yahoo.com" 
        className="hover:text-[#FF2A85] transition-colors flex items-center gap-2"
      >
        <span className="text-[#FF2A85]">✉</span> bachiquejouvert@yahoo.com
      </a>
      <span className="hidden sm:inline text-gray-600">•</span>
      <a 
        href="tel:+18683027800" 
        className="hover:text-[#4CC9F0] transition-colors flex items-center gap-2"
      >
        <span className="text-[#4CC9F0]">📞</span> +1 (868) 302-7800
      </a>
    </div>

    {/* Social Links */}
    <div className="flex items-center gap-6 my-2">
      {/* Instagram */}
      <a 
        href="https://instagram.com/bachiquejouvert" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-[#FF2A85] hover:bg-[#FF2A85]/10 text-white hover:text-[#FF2A85] transition-all duration-300"
        aria-label="Instagram"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </a>

      {/* TikTok */}
      <a 
        href="https://tiktok.com/@bachiquejouvert" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-[#8B3AEE] hover:bg-[#8B3AEE]/10 text-white hover:text-[#8B3AEE] transition-all duration-300"
        aria-label="TikTok"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.36 1.47-1.44 2.45-.1.97.26 1.96.96 2.65.73.73 1.8 1.07 2.81.93.99-.13 1.88-.73 2.37-1.59.38-.66.56-1.43.56-2.2-.02-4.74-.01-9.48-.01-14.22z"/>
        </svg>
      </a>
    </div>

    {/* Copyright & Disclaimer */}
    <div className="border-t border-white/5 pt-6 w-full text-xs text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-2">
      <p>© {new Date().getFullYear()} Bachique J'ouvert. All rights reserved.</p>
      <p className="text-[11px] text-gray-600">Trinidad & Tobago Carnival</p>
    </div>

  </div>
</footer>

    </div>
  );
}
