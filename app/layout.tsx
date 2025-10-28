import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Yadukul Dairy Private Limited',
  description: 'Fresh dairy products delivered to your doorstep.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
