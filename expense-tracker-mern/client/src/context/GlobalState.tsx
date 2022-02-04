import axios from "axios";
import React, { FC, createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

interface Transaction {
    id: number,
    text: string,
    amount: number
}

// Initial state
const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ],
    error: null,
    loading: true
}


interface GlobalContextValue {
    transactions: { id: number, text: string, amount: number }[],
    deleteTransaction: (id: number) => void;
}

// Create context
export const GlobalContext = createContext<any>(initialState);

interface Props {

}

// Provider component
export const GlobalProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions

    async function getTransactions(): Promise<void> {
        try {
            const res = await axios.get('/api/v1/transactions');
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            })
        } catch (error: any) {
            dispatch({
                type: 'TRANSACTIONS_ERROR',
                payload: error.response.data.error
            })
        }
    }

    async function deleteTransaction(id: number): Promise<void> {
        try {
            await axios.delete(`/api/v1/transactions/${id}`);
            dispatch({
                type: "DELETE_TRANSACTION",
                payload: id
            })
        } catch (error: any) {
            dispatch({
                type: 'TRANSACTIONS_ERROR',
                payload: error.response.data.error
            })
        }
    }

    async function addTransaction(transaction: Transaction): Promise<void> {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/v1/transactions/', transaction, config);
            dispatch({
                type: "ADD_TRANSACTION",
                payload: res.data.data
            })
        } catch (error: any) {
            dispatch({
                type: 'TRANSACTIONS_ERROR',
                payload: error.response.data.error
            })
        }
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}