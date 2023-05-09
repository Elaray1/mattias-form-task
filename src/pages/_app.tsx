import { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
      }}
    >
      <Component {...pageProps} />
      <Notifications position="top-right" />
    </MantineProvider>
  );
};

export default App;
