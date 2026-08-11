'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, Gem, Shirt, Crown, X } from 'lucide-react';

const SECTIONS_DATA = [
  { id: 'sec_1', name: 'Magenta Rage', price: 650, type: 'female', desc: 'Custom metallic magenta monokini or 2-piece high-waist set with matching band wristbands and neon face jewels.', icon: Gem, badge: 'Popular', color: '#FF2A85' },
  { id: 'sec_2', name: 'Violet Volt', price: 550, type: 'male', desc: 'Breathable quick-dry Violet Volt branded sleeveless jersey or regular tee paired with athletic boardshorts.', icon: Shirt, badge: null, color: '#8B3AEE' },
  { id: 'sec_3', name: 'Cyan Eclipse', price: 850, type: 'vip', desc: 'Full VIP access pass including front-of-band truck lounge access, premium accessories, and expedited pickup.', icon: Crown, badge: 'VIP Access', color: '#4CC9F0' },
];

export default function SectionsPage() {
  const [filter, setFilter] = useState('all');
  const [selectedSection, setSelectedSection] = useState<typeof SECTIONS_DATA[0] | null>(null);
  const [cartCount, setCartCount] = useState(0);

  const filtered = SECTIONS_DATA.filter(s => filter === 'all' || s.type === filter);

  return (
    <div className="bg-[#08070D] text-white min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-[999] bg-[#08070D]/95 border-b border-white/10 h-20 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 flex items-center justify-between">
          <Link href="/">
            <Image src="/image_8.png" alt="Logo" width={130} height={50} className="object-contain" />
          </Link>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-300">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1 right-1 bg-[#FF2A85] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">{cartCount}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Catalog Grid */}
      <main className="max-w-7xl mx-auto w-full px-4 pt-32 pb-20 space-y-12 flex-grow">
        <div className="text-center space-y-2">
          <span className="px-3 py-1 rounded-full bg-[#FF2A85]/10 text-[#FF2A85] text-xs font-bold uppercase tracking-widest border border-[#FF2A85]/30">Official 2026 Band Packages</span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase">Choose Your Section</h1>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2">
          {['all', 'female', 'male', 'vip'].map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition ${filter === cat ? 'bg-[#FF2A85] text-white' : 'bg-[#13111C] border border-white/10 text-gray-300'}`}>
              {cat} Packages
            </button>
          ))}
        </div>

        {/* Dynamic Section Mapping */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((section) => {
            const IconComp = section.icon;
            return (
              <div key={section.id} className="bg-[#13111C] border border-white/10 rounded-3xl overflow-hidden flex flex-col justify-between p-6 group shadow-xl transition hover:border-gray-500">
                <div className="space-y-4">
                  <div className="h-48 rounded-2xl bg-gradient-to-br from-[#13111C] to-black flex flex-col items-center justify-center relative">
                    {section.badge && <span className="absolute top-2 right-2 bg-[#FF2A85] text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase">{section.badge}</span>}
                    <IconComp className="w-14 h-14" style={{ color: section.color }} />
                  </div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-black uppercase">{section.name}</h3>
                    <span className="text-xl font-black text-[#FFD700]">${section.price} TTD</span>
                  </div>
                  <p className="text-xs text-gray-400">{section.desc}</p>
                </div>
                <button onClick={() => setSelectedSection(section)} className="w-full mt-6 bg-gradient-to-r from-[#FF2A85] to-[#8B3AEE] text-white text-xs font-black py-3 rounded-full uppercase tracking-wider">
                  Select Package & Sizing
                </button>
              </div>
            );
          })}
        </div>
      </main>

      {/* Sizing Modal Component */}
      {selectedSection && (
        <div className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#13111C] border border-[#FF2A85]/30 rounded-3xl max-w-md w-full p-6 relative">
            <button onClick={() => setSelectedSection(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white"><X className="w-5 h-5" /></button>
            <h3 className="text-xl font-black uppercase text-white mb-4">Size Configuration: {selectedSection.name}</h3>
            <form onSubmit={(e) => { e.preventDefault(); setCartCount(c => c + 1); setSelectedSection(null); }} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Select Size Option *</label>
                <select required className="w-full bg-[#08070D] border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#FF2A85]">
                  <option value="">Choose your fit...</option>
                  <option value="S">Small (S)</option>
                  <option value="M">Medium (M)</option>
                  <option value="L">Large (L)</option>
                  <option value="XL">Extra Large (XL)</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-[#FF2A85] via-[#8B3AEE] to-[#4CC9F0] text-white font-black py-3 rounded-full text-xs uppercase tracking-wider">
                Add to Registration Cart
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
