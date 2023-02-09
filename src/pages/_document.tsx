import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br" className={"antialiased scroll-smooth max-w-full"}>
      <Head/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
