import React, { createContext, useContext } from 'react';
import axios from 'axios';

const ApiContext = createContext();

const axiosInstance = axios.create({
  baseURL: 'https://ghibliapi.vercel.app',
});

export const ApiProvider = ({ children }) => {
  return (
    <ApiContext.Provider value={axiosInstance}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  return useContext(ApiContext);
};
