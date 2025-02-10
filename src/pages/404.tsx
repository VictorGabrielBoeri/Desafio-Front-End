import { useEffect, useState } from "react";

export default function Custom404() {
  const [mensagem, setMensagem] = useState("Carregando...");

  useEffect(() => {
    setMensagem("Página não encontrada!");
  }, []);

  return <h1>{mensagem}</h1>;
}