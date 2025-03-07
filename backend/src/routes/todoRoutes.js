import express from 'express';
const router = express.Router();

import { createTodo, readTodo, readOneTodo, editOneTodo, deleteTodo } from '../controllers/todoController.js';
import validateTodo from '../middleware/validateTodo.js';

router.route('/maketodo').post(validateTodo, createTodo);
router.route('/readtodo').get(readTodo);
router.route('/readtodo/:id').get(readOneTodo);
router.route('/edittodo/:id').put(validateTodo, editOneTodo);
router.route('/deltodo/:id').delete(deleteTodo);



export default router;

