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
        
        {/* Fixed "Purple Heat" Smoke Layer */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Top-Right Smoke Cloud */}
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#8B3AEE]/40 via-[#FF2A85]/20 to-transparent blur-[120px] animate-pulse" />
          
          {/* Bottom-Left Smoke Cloud */}
          <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#8B3AEE]/50 via-[#4CC9F0]/20 to-transparent blur-[140px] animate-pulse" style={{ animationDuration: '8s' }} />

          {/* Center Heat Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-radial from-[#8B3AEE]/25 via-transparent to-transparent blur-[150px]" />
        </div>

        {/* Page Content Wrapper (Sits above the smoke) */}
        <div className="relative z-10">
          {children}
        </div>

      </body>
    </html>
  );
}
