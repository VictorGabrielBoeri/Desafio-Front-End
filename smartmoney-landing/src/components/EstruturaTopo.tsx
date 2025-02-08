import styled from 'styled-components';
import { useRef } from 'react';

const ContainerTopo = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 50px 70px;
  background-color: #fff;
  background-image: url('/img/Rectangle 4.png');
  background-size: cover;
  height: 550px;
  position: relative;
  box-shadow: none;
`;

const ImagemLinha = styled.div`
  background-image: url('/img/lines.png');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.3;
`;

const DivAlinhamentoFim = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  z-index: 2;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  z-index: 10;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s ease;
  &:hover {
    color: #0070f3;
  }
`;

const DropdownButton = styled.button`
  background-color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s ease;
  margin-top: 20px;
  &:hover {
    background-color: blue;
    color: white;
  }
`;

const EstruturaTopo = () => {
  const navRef = useRef(null);
  return (
    <ContainerTopo>
      <ImagemLinha />
      <DivAlinhamentoFim>
        <Logo src="/img/logo-smartmoney.png" alt="SmartMoney Logo" />
      </DivAlinhamentoFim>
      <DivAlinhamentoFim>
        <Nav ref={navRef}>
          <NavLink href="#">Quem somos</NavLink>
          <NavLink href="#">Soluções</NavLink>
          <NavLink href="#">Carreira</NavLink>
          <NavLink href="#">Contato</NavLink>
          <NavLink href="#">Suporte</NavLink>
        </Nav>
        <DropdownButton>Cadastre-se</DropdownButton>
      </DivAlinhamentoFim>
    </ContainerTopo>
  );
};

export default EstruturaTopo;