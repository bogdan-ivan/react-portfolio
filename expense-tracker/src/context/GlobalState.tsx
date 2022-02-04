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
    ]
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

    function deleteTransaction(id: number): void {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }

    function addTransaction(transaction: Transaction): void {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}