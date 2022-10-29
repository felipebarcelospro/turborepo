import { baseTheme } from "ui";
import { SaasProvider } from "ui/saas-ui";

export default function App({ Component, pageProps }: any) {
  return (
    <SaasProvider theme={baseTheme}>
      <Component {...pageProps} />
    </SaasProvider>
  );
}
