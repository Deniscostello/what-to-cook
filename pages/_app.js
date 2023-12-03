import '@/styles/globals.css'
import {GlobalContextProvider} from './store/globalContext'
import Layout from '@/components/Layout';


export default function App({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <Component {...pageProps} />
    </GlobalContextProvider>
  );
}