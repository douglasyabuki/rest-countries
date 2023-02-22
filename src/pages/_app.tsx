// Next Native Components
import type { AppProps } from 'next/app'

// CSS
import '@/styles/globals.css'

// Icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

// Page Layout
import Layout from '@/components/layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
