import TransactionModel, { TransactionRequest } from "../models/Transaction";
import { Request, Response } from 'express';

// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
export const getTransactions = async (req: any, res: any, next: any) => {
    // res.send("GET transactions");

    try {
        const transactions = await TransactionModel.find();
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        })
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

// @desc    Add transaction
// @route   POST /api/v1/transactions
// @access  Public
export const addTransactions = async (req: Request, res: Response, next: any) => {
    // res.send("POST transaction");
    try {
        const { text, amount }: TransactionRequest = req.body;
        const transaction = await TransactionModel.create(req.body);
        return res.status(201).json({
            success: true,
            data: transaction
        })
    } catch (error: any) {
        if (error.name === "ValidationError") {
            const messages = Object.values(error.errors).map((val: any) => val.message);
            return res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: error.message
            })
        }
    }
}

// @desc    Delete transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public
export const deleteTransactions = async (req: Request, res: Response, next: any) => {
    // res.send("DELETE transaction");
    try {
        const transaction = await TransactionModel.findById(req.params.id);
        if (!transaction) {
            return res.status(404).json({
                success: false,
                error: "No transaction found"
            })
        } else {
            await transaction.remove();
            return res.status(200).json({
                success: true,
                data: transaction
            })
        }
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

