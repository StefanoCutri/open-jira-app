import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material';

import { darkTheme, lightTheme } from '@/themes'

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
