import React, { createContext, useContext, useState } from 'react';
import { useGet } from '../hooks/useGet';
import { Pet } from '../models/pet';
import { Ong } from '../models/ong';

const host = "http://192.168.15.106:1337"
const api_url = `${host}/api`;

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

  // Gets lists of all entities
  const getPets = useGet<Pet[]>(`${api_url}/pets`, {isList: true, populate: true});
  const getOngs = useGet<Ong[]>(`${api_url}/ongs`, {isList: true, populate: true});

  // Finds specific entity with id
  const findPhoto = (url: string) => `${host+url}`
  const findPet = useGet<Pet>(`${api_url}/pet`, {isList: false, populate: true});
  const findOng = useGet<Ong>(`${api_url}/ong`, {isList: false, populate: true});

  return {
    list: {
        pets: getPets,
        ongs: getOngs,
    },
    find: {
        photo: findPhoto,
        pet: findPet,
        ong: findOng,
    }
  }
}
