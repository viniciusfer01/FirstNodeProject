import { Router } from 'express';
import { uuid } from 'uuidv4';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

interface TransactionType {
  title: string;
  value: number;
  type: string;
}

transactionRouter.get('/', (request, response) => {
  try {
    // TODO
    const transactions = transactionsArray.all();

    return response.json(transactions);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    // TODO
    const { title, value, type }: TransactionType = request.body;

    const transaction = {
      id: uuid(),
      title,
      value,
      type,
    };

    transactionsArray.push(transaction);

    return response.json(transaction);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
