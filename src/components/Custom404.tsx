import { useEffect, useState } from 'react';

const Custom404: React.FC = () => {
  const [mensagem, setMensagem] = useState<string>('Carregando...');

  useEffect(() => {
    setMensagem('Página não encontrada!');
  }, []);

  return <h1>{mensagem}</h1>;
};

export default Custom404;