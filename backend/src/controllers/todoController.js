import todo from "../models/Todo.js";

// @desc  :   Create a new todo item
// @route :   POST /api/todo
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
            success_msg: "You've created a task succesfully"
        })
    }else{
        res.status(400);
        throw new Error('Invalid todo data provided'); 
    }

}

export { createTodo };

// Space allocated for edit--> edit or mark it as completed & delete the task functionality
