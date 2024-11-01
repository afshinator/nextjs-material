import type { Metadata } from 'next';
import Providers from './providers';
import Layout from './components/Layout';

export const metadata: Metadata = {
  title: 'Next.js with Material-UI',
  description: 'Modern web application with Material-UI and dark mode support',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}