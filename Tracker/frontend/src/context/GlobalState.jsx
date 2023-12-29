/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer, useState } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  transactions: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([])
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const fetchTransactions = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/v1/transactions', {
        method: 'GET'
      })
      const data = await res.json();
      setTransactions(data.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchTransactions();
  }, [transactions])
  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }
  
  return (<GlobalContext.Provider value={{
    transactions: transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}