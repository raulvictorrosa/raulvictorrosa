import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import theme from 'theme';

import '@fontsource/dm-sans/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/800.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
