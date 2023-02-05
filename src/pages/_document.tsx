import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={"antialiased scroll-smooth hover:scroll-auto"}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
