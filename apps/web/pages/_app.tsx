import { ThemeProvider } from 'ui'

type AppProps = {
  Component: React.ComponentType
  pageProps: Record<string, unknown>
}

export default function App({
  Component,
  pageProps
}: AppProps): React.ReactElement {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
