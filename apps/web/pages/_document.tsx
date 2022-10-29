import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { baseTheme } from "ui";
import { ColorModeScript } from "ui/chakra-ui";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript
            initialColorMode={baseTheme.config.initialColorMode}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
