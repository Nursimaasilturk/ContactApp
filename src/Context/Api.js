import React, { createContext, useContext, useEffect, useState } from 'react';
import apiClient from '../apiClient';

const ApiContext = createContext();
export const ApiProvider = ({ children }) => {
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);
  const fetchDataHandler = async (endpoint,method='GET',body=null)=>{
    const config = {
      method,
      url:endpoint,
      data:body
    }
		try {
      const response = await apiClient(config);
      setLoading(false);
      return response.data; 
    } catch (err) {
      setLoading(false);
      setError(err);
      throw err; 
    }
  };
  return (
    <ApiContext.Provider value={{ error,loading,fetchDataHandler }}>
      {children}
    </ApiContext.Provider>
  );
};
export const useApi = () => useContext(ApiContext);
