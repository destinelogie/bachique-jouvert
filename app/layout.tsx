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
      <body>{children}</body>
    </html>
  );
}
