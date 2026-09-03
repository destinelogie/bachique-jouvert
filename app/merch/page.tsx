'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, X, CheckCircle, CreditCard, Landmark, Upload, ArrowLeft } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  priceTTD: number;
  category: string;
  image: string;
  description: string;
}

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: "Bachique Insulated Tumbler (24oz)",
    priceTTD: 150,
    category: 'Drinkware',
    image: 'Free_Tumbler_Mockup_3.png',
    description: 'Keep your drinks ice-cold all J\'ouvert morning long. Features custom neon Bachique graphics.'
  },
  {
    id: '2',
    name: "Bacchanal Road Tee / Crop Top",
    priceTTD: 180,
    category: 'Apparel',
    image: 'T-Shirt_02.png',
    description: 'Breathable, lightweight cotton blend designed for maximum movement on the road.'
  },
  {
    id: '3',
    name: "Bachique VIP Goodie Bag & Kit",
    priceTTD: 250,
    category: 'Bundles',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600',
    description: 'Includes waterproof phone pouch, neon bandana, paint-proof sunglasses, and body glitter.'
  },
  {
    id: '4',
    name: "Neon Glow Bandana & Whistle Set",
    priceTTD: 60,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=600',
    description: 'High-visibility neon bandana paired with a loud carnival whistle.'
  }
];

export default function MerchStorePage() {
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank'>('card');
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    receiptFile: null as File | null
  });

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const totalTTD = cart.reduce((sum, item) => sum + item.product.priceTTD * item.quantity, 0);

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Connect backend API / Supabase insertion here
    setOrderPlaced(true);
  };

  return (
    <div className="bg-[#08070D] text-white min-h-screen font-sans antialiased selection:bg-[#FF2A85]">
      
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#08070D]/90 backdrop-blur-md border-b border-white/10 py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-gray-300 hover:text-[#FF2A85] transition text-sm">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FF2A85] via-[#8B3AEE] to-[#4CC9F0]">
            Bachique Store
          </h1>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 bg-white/5 border border-white/10 rounded-full hover:border-[#FF2A85] transition"
          >
            <ShoppingBag className="w-5 h-5 text-gray-200" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#FF2A85] text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Main Store Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#4CC9F0]/10 text-[#4CC9F0] border border-[#4CC9F0]/30 text-xs font-bold tracking-widest uppercase">
            Official Road Gear & Merchandise
          </span>
          <h2 className="text-4xl font-extrabold uppercase">Gear Up For J'ouvert</h2>
          <p className="text-gray-400 text-sm">Browse official Bachique merchandise. Pay instantly online in TTD or via local bank transfer.</p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map(product => (
            <div key={product.id} className="bg-[#13111C] border border-white/10 rounded-3xl overflow-hidden group hover:border-[#FF2A85]/50 transition duration-300 flex flex-col justify-between">
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-[10px] uppercase font-bold text-[#FF2A85] px-3 py-1 rounded-full border border-white/10">
                    {product.category}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-bold text-base text-white">{product.name}</h3>
                  <p className="text-gray-400 text-xs line-clamp-2">{product.description}</p>
                </div>
              </div>
              <div className="p-5 pt-0 flex items-center justify-between border-t border-white/5 mt-4">
                <span className="text-lg font-black text-[#4CC9F0]">TTD ${product.priceTTD}</span>
                <button 
                  onClick={() => addToCart(product)}
                  className="bg-white/10 hover:bg-[#FF2A85] text-white text-xs font-bold px-4 py-2 rounded-full transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-md bg-[#08070D] border-l border-white/10 h-full p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <h3 className="text-lg font-bold uppercase">Your Cart</h3>
                <button onClick={() => setIsCartOpen(false)}><X className="w-6 h-6 text-gray-400 hover:text-white" /></button>
              </div>

              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-12 text-sm">Your cart is empty.</p>
              ) : (
                <div className="py-4 space-y-4 max-h-[60vh] overflow-y-auto">
                  {cart.map(item => (
                    <div key={item.product.id} className="flex items-center justify-between bg-[#13111C] p-3 rounded-2xl border border-white/5">
                      <div>
                        <h4 className="font-semibold text-sm">{item.product.name}</h4>
                        <p className="text-xs text-gray-400">Qty: {item.quantity} × TTD ${item.product.priceTTD}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="font-bold text-sm text-[#4CC9F0]">TTD ${item.product.priceTTD * item.quantity}</span>
                        <button onClick={() => removeFromCart(item.product.id)} className="text-red-400 hover:text-red-300 text-xs">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="pt-4 border-t border-white/10 space-y-4">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total Amount:</span>
                  <span className="text-[#FF2A85]">TTD ${totalTTD}</span>
                </div>
                <button 
                  onClick={() => { setIsCartOpen(false); setIsCheckoutOpen(true); }}
                  className="w-full bg-gradient-to-r from-[#FF2A85] via-[#8B3AEE] to-[#4CC9F0] text-white font-bold py-3 rounded-full uppercase text-sm tracking-wider hover:opacity-90 transition"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#13111C] border border-white/10 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
            <button onClick={() => setIsCheckoutOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>

            {orderPlaced ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle className="w-16 h-16 text-[#4CC9F0] mx-auto animate-bounce" />
                <h3 className="text-2xl font-black uppercase">Order Submitted!</h3>
                <p className="text-gray-300 text-sm max-w-sm mx-auto">
                  {paymentMethod === 'card' 
                    ? "Your payment is being processed. A confirmation receipt has been sent to your email."
                    : "Your order details and bank reference have been received. We will notify you as soon as your bank receipt is verified."}
                </p>
                <button onClick={() => { setOrderPlaced(false); setIsCheckoutOpen(false); setCart([]); }} className="bg-[#FF2A85] text-white font-bold px-6 py-2.5 rounded-full text-xs uppercase">
                  Close & Continue Browsing
                </button>
              </div>
            ) : (
              <form onSubmit={handleCheckoutSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-extrabold uppercase">Complete Payment</h3>
                  <p className="text-xs text-gray-400">Total payable: <strong className="text-[#FF2A85]">TTD ${totalTTD}</strong></p>
                </div>

                {/* Customer Info */}
                <div className="space-y-3">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    required 
                    className="w-full bg-[#08070D] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#FF2A85] outline-none" 
                    onChange={e => setFormData({...formData, fullName: e.target.value})}
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      required 
                      className="bg-[#08070D] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#FF2A85] outline-none" 
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone (+1 868...)" 
                      required 
                      className="bg-[#08070D] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#FF2A85] outline-none" 
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                {/* Payment Method Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Select Payment Method</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-3 rounded-2xl border flex items-center justify-center space-x-2 text-xs font-bold transition ${paymentMethod === 'card' ? 'border-[#FF2A85] bg-[#FF2A85]/10 text-white' : 'border-white/10 text-gray-400'}`}
                    >
                      <CreditCard className="w-4 h-4" />
                      <span>TT Debit / Card</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('bank')}
                      className={`p-3 rounded-2xl border flex items-center justify-center space-x-2 text-xs font-bold transition ${paymentMethod === 'bank' ? 'border-[#8B3AEE] bg-[#8B3AEE]/10 text-white' : 'border-white/10 text-gray-400'}`}
                    >
                      <Landmark className="w-4 h-4" />
                      <span>Bank Deposit</span>
                    </button>
                  </div>
                </div>

                {/* Form Fields: Credit / Debit Card (Direct Entry) */}
                {paymentMethod === 'card' && (
                  <div className="space-y-3 bg-[#08070D] p-4 rounded-2xl border border-white/10">
                    <p className="text-[11px] text-[#4CC9F0]">Encrypted 256-Bit Local Card Processing</p>
                    <input 
                      type="text" 
                      placeholder="Cardholder Name" 
                      required 
                      className="w-full bg-[#13111C] border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:border-[#FF2A85] outline-none" 
                    />
                    <input 
                      type="text" 
                      placeholder="Card Number (4000 0000 0000 0000)" 
                      required 
                      maxLength={19}
                      className="w-full bg-[#13111C] border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:border-[#FF2A85] outline-none" 
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <input 
                        type="text" 
                        placeholder="MM / YY" 
                        required 
                        maxLength={5}
                        className="bg-[#13111C] border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:border-[#FF2A85] outline-none" 
                      />
                      <input 
                        type="password" 
                        placeholder="CVV / CVC" 
                        required 
                        maxLength={4}
                        className="bg-[#13111C] border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:border-[#FF2A85] outline-none" 
                      />
                    </div>
                  </div>
                )}

                {/* Form Fields: Direct Bank Deposit Info */}
                {paymentMethod === 'bank' && (
                  <div className="space-y-4 bg-[#08070D] p-4 rounded-2xl border border-white/10 text-xs text-gray-300">
                    <div className="space-y-1">
                      <p className="font-bold text-[#FF2A85] uppercase">Bank Account Details</p>
                      <p><strong>Bank:</strong> First Citizens Bank</p>
                      <p><strong>Account Name:</strong> Bachique Jouvert</p>
                      <p><strong>Account Number:</strong> 3215947</p>
                      <p><strong>Account Type:</strong> Savings</p>
                    </div>

                    <div className="pt-2 border-t border-white/10 space-y-2">
                      <label className="font-bold text-gray-200 block">Upload Transfer Receipt (Optional)</label>
                      <label className="flex items-center justify-center p-3 border border-dashed border-white/20 rounded-xl cursor-pointer hover:border-[#8B3AEE] transition">
                        <Upload className="w-4 h-4 mr-2 text-[#8B3AEE]" />
                        <span>{formData.receiptFile ? formData.receiptFile.name : 'Choose receipt image / PDF'}</span>
                        <input 
                          type="file" 
                          accept="image/*,.pdf" 
                          className="hidden" 
                          onChange={e => setFormData({...formData, receiptFile: e.target.files?.[0] || null})}
                        />
                      </label>
                    </div>
                  </div>
                )}

                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[#FF2A85] via-[#8B3AEE] to-[#4CC9F0] text-white font-bold py-3.5 rounded-full uppercase text-xs tracking-wider shadow-lg hover:opacity-90 transition"
                >
                  {paymentMethod === 'card' ? `Pay TTD $${totalTTD} Now` : `Submit Bank Deposit Order`}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
