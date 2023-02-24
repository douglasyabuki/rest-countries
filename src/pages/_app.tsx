// Interfaces
import { ICountry } from '@/interfaces/ICountry';

// Next Native Components
import type { AppProps } from 'next/app'

// CSS
import '@/styles/globals.css'

// Hooks
import { useState, useEffect } from 'react';

// Icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

// Page Layout
import Layout from '@/components/layout/Layout';

// Utils
import { fetchCountries } from '@/utils/fetchCountries';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [countryList, setCountryList] = useState<ICountry[] | null>(null);

  // Function to fetch data from api/countries
  const loadCountryList = async () => {
    let list = await fetchCountries();
    list.sort((a,b) => a.name.common.localeCompare(b.name.common));
    setCountryList(list);
    setIsLoading(false);
    console.log(countryList);
  };

  // Triggers load on app start
  useEffect(() => {
    loadCountryList();
  }, []);

  return (
    <Layout>
      <Component {...pageProps} countryList={countryList} isLoading={isLoading}/>
    </Layout>
  )
}
