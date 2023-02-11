import "../i18n/i18n"
import "../../styles/globals.css"
import "@/extends/extendedPrototypes"
import "swiper/css"
import "swiper/css/pagination"
import type { AppProps } from "next/app"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { createMyTheme } from "@/mui"
import React from "react"
import { Provider } from "react-redux"
import { store } from "@/store"
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"

let persister = persistStore(store)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <ThemeProvider theme={createMyTheme()}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
