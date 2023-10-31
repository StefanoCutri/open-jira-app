import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { UIProvider } from "@/context/ui";

import { darkTheme } from "@/themes";

import "@/styles/globals.css";
import { EntriesProvider } from "@/context/entries";
import { SnackbarProvider } from "notistack";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={3}>
    <EntriesProvider>
      <UIProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    </EntriesProvider>
    </SnackbarProvider>
  );
}
