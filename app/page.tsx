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
      <nav className="fixed top-0 left-0 w-full z-[999] bg-[#08070D]/95 backdrop-blur-md border-b border-white/10 h-20 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/IMG_0979.png" alt="Bachique J'ouvert Logo" width={150} height={60} className="h-12 sm:h-16 w-auto object-contain drop-shadow-[0_0_10px_rgba(255,42,133,0.3)]" priority />
          </Link>

          <div className="hidden md:flex items-center space-x-8 font-medium text-sm text-gray-300">
            <a href="#home" className="hover:text-[#FF2A85] transition">Home</a>
            <a href="#about" className="hover:text-[#FF2A85] transition">About</a>
            <Link href="/sections" className="hover:text-[#FF2A85] transition">Sections</Link>
            <Link href="/waitlist" className="text-[#FF2A85] font-bold flex items-center space-x-1.5 hover:opacity-85 transition">
              <span>Waitlist</span>
              <span className="bg-[#FF2A85]/20 text-[#FF2A85] text-[10px] px-2 py-0.5 rounded-full border border-[#FF2A85]/30 uppercase tracking-wide">Pre-Launch</span>
            </Link>
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

      <footer className="border-t border-white/10 py-8 text-center text-xs text-gray-500 bg-black/40">
        © 2026 Bachique J'ouvert. All rights reserved. | bachiquejouvert.com
      </footer>
    </div>
  );
}
