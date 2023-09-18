import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import { createTheme, CssBaseline } from '@mui/material'

import '@/styles/globals.css'

const basicTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={basicTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
