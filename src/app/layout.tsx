import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Muhammad Rayhan Denel | Portfolio',
  description: 'Product Manager with a foundation in Computer Science.',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-[#111] text-gray-800 dark:text-gray-200`}>
        {/* Change defaultTheme to "light" here */}
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}