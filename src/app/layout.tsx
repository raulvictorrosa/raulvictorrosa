import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Raul Rosa',
};

import '@fontsource/dm-sans/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/800.css';

import { Providers } from './providers';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
