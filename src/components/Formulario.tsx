import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShield } from '@fortawesome/free-solid-svg-icons';

const Formulario = () => {
  const [tipoPessoa, pegarTipoPessoa] = useState<'pessoaFisica' | 'empresa'>('pessoaFisica');
  const [telefone, setTelefone] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cnpj, setCnpj] = useState('');

  const formatarTelefone = (valor: string) => {
    return valor
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .substring(0, 15);
  };

  const lidarComAlteracaoTelefone = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const valor = evento.target.value;
    setTelefone(formatarTelefone(valor));
  };

  const lidarComAlteracaoNome = (evento: React.ChangeEvent<HTMLInputElement>) => {
    setNome(evento.target.value);
  };

  const lidarComAlteracaoEmail = (evento: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(evento.target.value);
  };

  const lidarComAlteracaoCnpj = (evento: React.ChangeEvent<HTMLInputElement>) => {
    setCnpj(evento.target.value);
  };

  const todosCamposPreenchidos =
    nome.trim() !== '' &&
    email.trim() !== '' &&
    telefone.trim() !== '' &&
    (tipoPessoa === 'pessoaFisica' || (tipoPessoa === 'empresa' && cnpj.trim() !== ''));

  return (
    <>
      <div className="card px-5 py-4 w-340-resp shadow-lg" style={{ width: '33rem' }}>
        <p className="fs-6 mb-0">Faça parte da revolução digital</p>
        <h1 className="fw-medium fs-22-resp fs-3">Cadastre-se e faça parte <br />do lançamento oficial</h1>
        <form className="d-grid gap-3">
          <div className="d-flex justify-content-start my-3">
            <div className="d-flex align-items-center me-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="tipoPessoa"
                  value="pessoaFisica"
                  checked={tipoPessoa === 'pessoaFisica'}
                  onChange={(e) => pegarTipoPessoa(e.target.value as 'pessoaFisica' | 'empresa')}
                />
              </div>
              <h6 className="fw-semi-bold text-900 mb-1">Para você</h6>
            </div>

            <div className="d-flex align-items-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="tipoPessoa"
                  value="empresa"
                  checked={tipoPessoa === 'empresa'}
                  onChange={(e) => pegarTipoPessoa(e.target.value as 'pessoaFisica' | 'empresa')}
                />
              </div>
              <h6 className="fw-semi-bold text-900 mb-1">Para empresa</h6>
            </div>
          </div>

          {tipoPessoa === 'empresa' && (
            <input
              className="form-control p-3"
              type="text"
              placeholder="CNPJ"
              value={cnpj}
              onChange={lidarComAlteracaoCnpj}
            />
          )}
          <input
            className="form-control p-3"
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={lidarComAlteracaoNome}
          />
          <input
            className="form-control p-3"
            type="email"
            placeholder="Email"
            value={email}
            onChange={lidarComAlteracaoEmail}
          />
          <input
            className="form-control p-3"
            type="text"
            placeholder="Telefone"
            value={telefone}
            onChange={lidarComAlteracaoTelefone}
          />

          <button className={`btn ${todosCamposPreenchidos ? 'btn-outline-primary' : 'btn-primary'} py-3`} disabled={!todosCamposPreenchidos}>
            {tipoPessoa === 'empresa' ? 'Quero para minha empresa' : 'Quero ser cliente'}
          </button>
        </form>
        <p className="fs-6 my-3">
          Ao enviar seus dados, você autoriza que o SmartMoney entre em contato e declara estar ciente da Política de Privacidade
        </p>
        <div className="border border-secondary opacity-25 mb-3"></div>
        <div className="d-flex">
          <FontAwesomeIcon icon={faShield} style={{ fontSize: '1.5rem', color: '#5de1b9' }} />
          <p className="ms-3">Seus dados estão seguros</p>
        </div>
      </div>
    </>
  );
};

export default Formulario;