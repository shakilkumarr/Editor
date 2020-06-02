import Head from 'next/head'
import HomePage from './HomePage';


export default function Home() {
  return (
    <div className="container">
      <style global jsx> {
      `
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div,
        div#__next > div > div {
          height: 100%;
          margin: 0;
          background-color: #E2F3FF;
      `}
      </style>
      <Head>
        <title>Test Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  )
}
