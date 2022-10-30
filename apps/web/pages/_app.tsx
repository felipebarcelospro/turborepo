import { ThemeProvider } from "ui";

export default function App({ Component, pageProps }: any): React.ReactElement {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
