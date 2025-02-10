import { createContext, useContext, useState, ReactNode } from "react";

interface MeuContextProps {
  valor: string;
  setValor: (valor: string) => void;
}

const MeuContext = createContext<MeuContextProps | undefined>(undefined);

export function MeuProvider({ children }: { children: ReactNode }) {
  const [valor, setValor] = useState("Inicial");

  return (
    <MeuContext.Provider value={{ valor, setValor }}>
      {children}
    </MeuContext.Provider>
  );
}

export function useMeuContext() {
  const context = useContext(MeuContext);
  if (!context) {
    throw new Error("useMeuContext deve ser usado dentro de MeuProvider");
  }
  return context;
}