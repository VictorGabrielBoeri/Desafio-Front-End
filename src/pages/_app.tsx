import type { AppProps } from 'next/app';
import { MeuProvider } from '@/context/MeuContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MeuProvider>
      <Component {...pageProps} />
    </MeuProvider>
  );
}