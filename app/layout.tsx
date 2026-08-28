import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bachique J\'ouvert',
  description: 'Trinidad Carnival Road March Experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#08070D] text-white overflow-x-hidden relative min-h-screen">
        
        {/* Animated Purple Heat Smoke Layer */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#08070D]">
          
          {/* Base Ambient Heat Glow */}
          <div className="absolute inset-0 bg-radial from-[#8B3AEE]/30 via-[#FF2A85]/10 to-transparent blur-[100px]" />

          {/* Moving Smoke Waves */}
          <div className="smoke-container">
            <div className="smoke-wave wave-1"></div>
            <div className="smoke-wave wave-2"></div>
            <div className="smoke-wave wave-3"></div>
          </div>

        </div>

        {/* Page Content */}
        <div className="relative z-10">
          {children}
        </div>

      </body>
    </html>
  );
}
