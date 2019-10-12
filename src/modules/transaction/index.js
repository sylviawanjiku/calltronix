import express from 'express';
import TransactionController from './transactionController';

const transactionRouter = express.Router();

transactionRouter.post(
    '/transaction',
    TransactionController.createTransaction
);
transactionRouter.get(
    '/transaction',
    TransactionController.getTransactionData
);

export default transactionRouter;
