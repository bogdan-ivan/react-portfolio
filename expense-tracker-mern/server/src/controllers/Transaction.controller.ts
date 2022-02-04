import express from "express";
import { getTransactions, addTransactions, deleteTransactions } from "../services/Transaction.service";

const router = express.Router();
//router.get('/', (req, res) => res.send("Hi"));

router
    .route('/')
    .get(getTransactions)
    .post(addTransactions);

router.route('/:id').delete(deleteTransactions);

export default router;