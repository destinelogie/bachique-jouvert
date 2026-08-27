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
      <body className="bg-[#08070D] text-white overflow-x-hidden relative">
        {/* Animated Purple Heat Smoke Layer */}
        <div className="purple-heat-bg">
          <div className="purple-smoke-cloud-1"></div>
          <div className="purple-smoke-cloud-2"></div>
        </div>

        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}
