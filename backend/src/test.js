import AppDataSource from "./config/data-source.js";
import { todo } from "./Entities/todo.js"; // Import the entity

async function testDatabase() {
    await AppDataSource.initialize();

    const todoRepo = AppDataSource.getRepository(todo); // Use the imported entity

    // Insert a new todo
    const newTodo = todoRepo.create({
        title: "Test Todo",
        description: "This is a test task",
        completed: false,
    });

    await todoRepo.save(newTodo);
    console.log("✅ New Todo Created:", newTodo);

    // Fetch all todos
    const todos = await todoRepo.find();
    console.log("📌 All Todos:", todos);
}

testDatabase().catch(console.error);
