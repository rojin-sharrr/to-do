import express from 'express';
const router = express.Router();

import { createTodo } from '../controllers/todoController.js';

router.route('/').post(createTodo);

export default router;

