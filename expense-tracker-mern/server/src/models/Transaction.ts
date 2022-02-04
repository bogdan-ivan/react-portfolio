import mongoose from "mongoose";
import { Schema, model, connect } from 'mongoose';

export interface Transaction {
    text: string,
    amount: number,
    createdAt: Date
}

export interface TransactionRequest {
    text: string,
    amount: number,
}

const TransactionSchema = new Schema<Transaction>({
    text: {
        type: String,
        trim: true,
        required: [true, "Please add some text"]
    },
    amount: {
        type: Number,
        required: [true, "Please add a positive or negative number"]
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

// Create model
const TransactionModel = model<Transaction>('Transaction', TransactionSchema);

export default TransactionModel;