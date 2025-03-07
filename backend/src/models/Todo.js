import mongoose from "mongoose";  // To connect/query with db from VS Code; similar to TypeORM for SQL Db


const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: false,
    },
    completed: {
        type: Boolean,
        required: true,
    },
}, {
    timestamps: true
});

const todo = mongoose.model("todo", todoSchema);

export default todo;
