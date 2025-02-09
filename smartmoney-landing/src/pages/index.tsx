import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import GlobalStyles from '../app/styles/globalStyles';
import EstruturaTopo from '../components/EstruturaTopo';
import SolucaoCustomizada from '../components/SolucaoCustomizada';
import CardsInformativos from '@/components/CardsInformativos';
import AreaNoticias from '@/components/AreaNoticias';
import Loading from '@/components/Loading';

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
   
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <GlobalStyles />
      <EstruturaTopo />
      <SolucaoCustomizada />
      <CardsInformativos />
      <AreaNoticias />
    </>
  );
};

export default Home;