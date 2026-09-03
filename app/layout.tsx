import type { Metadata } from 'next';
import './globals.css';
import SmokeBackground from '@/components/SmokeBackground';

export const metadata: Metadata = {
  title: "Bachique J'ouvert",
  description: "Trinidad's Ultimate J'ouvert Morning Experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#08070D] text-white relative">
        {/* Persistent Moving Smoke Background across all pages */}
        <SmokeBackground />

        {/* Page Content */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
