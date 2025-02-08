import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShield } from '@fortawesome/free-solid-svg-icons';

const ContainerFormulario = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 50px 10%;
  width: 100%;
  position: relative;
`;

const CardFormulario = styled.div`
  position: relative;
  padding: 33px;
  border-radius: 20px;
  background: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  border: 2px solid white;
`;

const AlinhamentoDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 15px;
`;

const Titulo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  text-align: start;
  margin-bottom: 10px;
  line-height: 1.3;
`;

const SubTitulo = styled.p`
  font-size: 1rem;
  color: #000;
  text-align: start;
  margin-bottom: 10px;
  line-height: 1.6;
`;

const SubTituloTipoPessoa = styled.p`
  font-size: 1rem;
  color: #000;
  text-align: start;
  line-height: 1.6;
  margin-bottom: 14px;
  margin-right: 30px;
`;

const SubTituloTermos = styled.p`
  font-size: 0.9rem;
  color: #000;
  text-align: start;
  line-height: 1.6;
  margin-bottom: 14px;
  max-width: 440px;
  margin-left: 10px;
`;

const Form = styled.form`
  display: grid;
  justify-content: start;
  align-items: start;
  gap: 1rem;
  width: 100%;
`;

const Input = styled.input`
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 400px;
  margin-bottom: 0;
  transition: border-color 0.3s ease-in-out;
  &:focus {
    outline: none;
    border-color: #007BFF;
  }
  &::placeholder {
    color: #aaa;
  }
`;

const InputTipoPessoa = styled.input`
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 25px;
  height: 25px;
  margin-bottom: 1rem;
  transition: transform 0.3s ease-in-out;
  &:checked {
    background-color: #007BFF;
    border-color: #007BFF;
  }
`;

const BotaoConfirmacao = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background-color: #007BFF;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  max-width: 445px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #003d80;
  }
  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
`;

const AlinhamentoInputs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AlinhaInput = styled.div`
  display: flex;
  justify-content: start;
  align-items: end;
`;

const Formulario = () => {
  const [tipoPessoa, pegarTipoPessoa] = useState<'pessoaFisica' | 'empresa'>('pessoaFisica');
  const trocarInputRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    pegarTipoPessoa(event.target.value as 'pessoaFisica' | 'empresa');
  };
  const [telefone, setTelefone] = useState('');
  const formatarTelefone = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .substring(0, 15);
  };
  const handleTelefoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTelefone(formatarTelefone(value));
  };
  return (
    <ContainerFormulario>
      <CardFormulario>
        <SubTitulo>Faça parte da revolução digital!</SubTitulo>
        <Titulo>Cadastre-se e faça parte <br />do lançamento oficial</Titulo>
        <Form>
          <AlinhamentoInputs>
            <AlinhaInput>
              <InputTipoPessoa
                type="radio"
                name="tipoPessoa"
                value="pessoaFisica"
                checked={tipoPessoa === 'pessoaFisica'}
                onChange={trocarInputRadio}
              />
              <SubTituloTipoPessoa>Para você</SubTituloTipoPessoa>
            </AlinhaInput>

            <AlinhaInput>
              <InputTipoPessoa
                type="radio"
                name="tipoPessoa"
                value="empresa"
                checked={tipoPessoa === 'empresa'}
                onChange={trocarInputRadio}
              />
              <SubTituloTipoPessoa>Para empresa</SubTituloTipoPessoa>
            </AlinhaInput>
          </AlinhamentoInputs>

          <Input type="text" placeholder="Nome" />
          <Input type="email" placeholder="Email" />
          <Input
            type="text"
            placeholder="Telefone"
            value={telefone}
            onChange={handleTelefoneChange}
          />

          {tipoPessoa === 'empresa' && <Input type="text" placeholder="CNPJ" />}
          <BotaoConfirmacao>Quero ser cliente</BotaoConfirmacao>
        </Form>
        <SubTituloTermos>Ao enviar seus dados, você autoriza que o SmartMoney entre em contato e declara estar ciente da Política de Privacidade</SubTituloTermos>
        <AlinhamentoDiv>
          <FontAwesomeIcon icon={faShield} style={{ fontSize: '1.5rem', color: '#5de1b9' }} />
          <SubTituloTermos>Seus dados estão seguros</SubTituloTermos>
        </AlinhamentoDiv>
      </CardFormulario>
    </ContainerFormulario>
  );
};

export default Formulario;
