import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bachique J\'ouvert',
  description: 'Trinidad Carnival Experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#08070D] text-white overflow-x-hidden relative min-h-screen">
        
        {/* Real Billowing "Purple Heat" Smoke Background */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#08070D]">
          
          {/* Ambient Purple Base Glow */}
          <div className="absolute inset-0 bg-radial from-[#8B3AEE]/30 via-[#08070D]/80 to-[#08070D] z-1" />

          {/* Real Moving Smoke Video Loop */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen filter hue-rotate-[220deg] saturate-200 contrast-125 z-0"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-white-smoke-flowing-in-dark-background-40919-large.mp4"
              type="video/mp4"
            />
          </video>

          {/* Vignette Overlay to blend edges */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#08070D] via-transparent to-[#08070D]/80 z-2" />
        </div>

        {/* Main Content (Sitting on top of the moving smoke) */}
        <div className="relative z-10">
          {children}
        </div>

      </body>
    </html>
  );
}
