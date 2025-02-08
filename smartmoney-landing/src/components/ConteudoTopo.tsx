import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const EstruturaConteudoTopo = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  margin-left: 0;
  width: 100%;
  max-width: 1200px;
  margin-left: 150px;
  height: 455px;
`;

const CardNumeros = styled.div`
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 0px 74px 0px 0px;
  text-align: center;
  width: 100%;
  max-width: 69px;
  margin: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }
`;

const AlinhamentoTitulo = styled.div`
  display: grid;
  gap: 10px;
  text-align: center;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const AlinhamentoCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const Titulo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  text-align: start;
  margin-bottom: 0;
  line-height: 1.3;
  margin-top: 0;
`;

const SubTitulo = styled.p`
  font-size: 1rem;
  color: #fff;
  text-align: start;
  margin-bottom: 30px;
  margin-top: 0;
  line-height: 1.6;
`;

const SubTituloBorda = styled.p`
  font-size: 1rem;
  color: #fff;
  text-align: center;
  margin-bottom: 30px;
  margin-top: 0;
  line-height: 1.6;
  border: 2px solid #1d1b38;
  border-radius: 20px;
  padding: 10px;
  width: 200px;
`;

const NumeroTexto = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  display: block;
  margin-bottom: 15px;
`;

const TextoInformacoes = styled.span`
  font-size: 15px;
  color: #fff;
  font-weight: 500;
`;

const BordaAzul = styled.span`
  border: 2px solid blue;
  width: 50px;
  margin-bottom: 35px;
  display: block;
`;

const ConteudoTopo = () => {
    return (
        <EstruturaConteudoTopo>
            <AlinhamentoTitulo>
                <SubTituloBorda>
                    <FontAwesomeIcon icon={faStar} size="1x" color="#FFD700" /> Tecnologia disruptiva
                </SubTituloBorda>
                <Titulo>Conta digital que não é <br />só uma conta digital.</Titulo>
                <SubTitulo>Pellentesque rutrum turpis non est turpis pretium morbi urna.</SubTitulo>
            </AlinhamentoTitulo>
            <BordaAzul />
            <AlinhamentoCards>
                <CardNumeros>
                    <NumeroTexto>120</NumeroTexto>
                    <TextoInformacoes>Projetos realizados em 2021</TextoInformacoes>
                </CardNumeros>
                <CardNumeros>
                    <NumeroTexto>200</NumeroTexto>
                    <TextoInformacoes>Clientes satisfeitos</TextoInformacoes>
                </CardNumeros>
                <CardNumeros>
                    <NumeroTexto>50</NumeroTexto>
                    <TextoInformacoes>Eventos organizados</TextoInformacoes>
                </CardNumeros>
            </AlinhamentoCards>
        </EstruturaConteudoTopo>
    );
};

export default ConteudoTopo;
