import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import GlobalStyles from '../app/styles/globalStyles';
import EstruturaTopo from '../components/EstruturaTopo';
import SolucaoCustomizada from '../components/SolucaoCustomizada';
import CardsInformativos from '@/components/CardsInformativos';
import AreaNoticias from '@/components/AreaNoticias';
import Loading from '@/components/Loading';
import VantagensExlusivas from '@/components/VantagensExlusivas';
import FaleConosco from '@/components/FaleConosco';
import PerguntasFrequentes from '@/components/PerguntasFrequentes';
import Rodape from '@/components/Rodape';

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
   
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

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
      <VantagensExlusivas />
      <FaleConosco />
      <PerguntasFrequentes />
      <Rodape />
    </>
  );
};

export default Home;