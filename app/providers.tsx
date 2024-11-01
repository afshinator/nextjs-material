'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import ThemeRegistry from './ThemeRegistry';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ThemeRegistry>{children}</ThemeRegistry>
    </NextThemeProvider>
  );
}