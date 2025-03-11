import AppDataSource from "../config/data-source.js";
import { todo } from "../Entities/todo.js";

const todoRepository = AppDataSource.getRepository(todo);

export default todoRepository;