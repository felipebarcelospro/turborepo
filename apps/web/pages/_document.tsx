import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from 'ui'

export default class Document extends NextDocument {
  render(): React.ReactElement {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
