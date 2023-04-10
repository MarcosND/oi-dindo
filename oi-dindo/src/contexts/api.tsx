import React, { createContext, useContext, useState } from 'react';
import { useGet } from '../hooks/useGet';

const api_url = "localhost:4000";

type ApiContextType = {
  apiData: string[];
  setApiData: React.Dispatch<React.SetStateAction<string[]>>;
};

const ApiContext = createContext<ApiContextType | undefined>(undefined);

type ApiProviderProps = {
  children: React.ReactNode;
};

export const ApiProvider = ({ children }: ApiProviderProps) => {
  const [apiData, setApiData] = useState<string[]>([]);

  return (
    <ApiContext.Provider value={{ apiData, setApiData }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {

  const context = useContext(ApiContext);
  if (!context) throw new Error('useApi must be used within an ApiProvider')
  const { apiData, setApiData } = context;

  const getPets = useGet<Pet[]>(`${api_url}/pets`);
  const getOngs = useGet<Ong[]>(`${api_url}/ongs`);

  return {
    get: {
        pets: getPets,
        ongs: getOngs,
    }
  }
}
