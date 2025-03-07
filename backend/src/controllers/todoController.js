import todo from "../models/Todo.js";
import mongoose from "mongoose";

// @desc  :   Create a new todo item
// @route :   POST /api/maketodo
// @access:   Public
const createTodo =  async (req, res) => {
    console.log('Controller is being hit')
    const {title, description, completed} = req.body;

    const newTask = await todo.create({
        title,
        description,
        completed
    });

    // Validating succesful todo creation
    if (newTask){
        console.log(`Todo created succesfully: `, newTask);
        res.status(200).json({
            title: newTask.title,
            description: newTask.description,
            completed: newTask.completed,
            success_msg: `You've created a task of '${title}' succesfully`
        })
    }else{
        res.status(400);
        throw new Error('Invalid todo data provided'); 
    }

}




// @desc  :   Read all todo's in the record
// @route :   GET /api/readtodo/
// @access:   Public
const readTodo =  async (req, res) => {
    // res.send('readTodo controller hit after beign routed to /api/readtodo')
    const todos = await todo.find({});
    res.status(200).json(todos);
}



// @desc  :   Read one todo's in the record
// @route :   GET /api/readtodo/:id
// @access:   Public
const readOneTodo =  async (req, res, next) => {
    const taskId = req.params.id;

    try {
       const task = await todo.findById(taskId);
       res.status(200).json(task);
    } catch (error) {
        next(error);
    }
    
}
    
    
    




// @desc  :   Edit one todo's in the record
// @route :   PUT /api/readtodo/:id
// @access:   Public
const editOneTodo =  async (req, res, next) => {
    // res.send('readTodo controller hit after beign routed to /api/readtodo')
    const taskId = req.params.id;
    const taskBody = req.body;

    try {
        // Edit the task that has been provided
        const task = await todo.findById(taskId);
        if(task){
            task.title = taskBody.title? taskBody.title : task.title;
            task.description = taskBody.description? taskBody.description: task.description
            task.completed = taskBody.completed? taskBody.completed: task.completed
            
            const updatedTodo = await task.save();
            res.status(200).json(updatedTodo);
    
        }

    } catch (error) {
        next(error)
    }

}




// @desc  :   Delete the task that has been mentioned
// @route :   DELETE /api/deltodo/:id
// @access:   Public
const deleteTodo =  async (req, res) => {
    // res.send('readTodo controller hit after beign routed to /api/readtodo')
    const taskId = req.params.id;
    const task = await todo.findById(taskId)

    if(task){
        await todo.deleteOne({_id: taskId})
        res.status(200).json(`Task '${task.title}' deleted succesfully `)
    }else{
        res.status(404);
    }
}



export { createTodo, readTodo, readOneTodo, editOneTodo, deleteTodo };