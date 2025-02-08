import type { NextPage } from 'next';
import EstruturaTopo from '../src/components/EstruturaTopo';
import Formulario from '../src/components/Formulario';
import ConteudoTopo from '../src/components/ConteudoTopo';
import styled, { createGlobalStyle } from 'styled-components';

const EstiloGlobal = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif; /* Exemplo de font */
    background-color: #f5f5f5; /* Exemplo de cor de fundo */
  }
`;

const AlinhamentoConteudo = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 110px;
  right: 80px;
  width: 100%;
`;

const Home: NextPage = () => {
  return (
    <>
      <EstiloGlobal />
      <EstruturaTopo />
      <AlinhamentoConteudo>
        <ConteudoTopo />
        <Formulario />
      </AlinhamentoConteudo>
    </>
  );
};

export default Home;