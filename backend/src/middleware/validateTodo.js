const validateTodo = (req, res, next) => {
    const { title, description, completed } = req.body;

    let errors = [];

    if( !title || typeof title !== "string" || title.trim().length < 3 || title.trim().length > 100 ){
        errors.push("Title: is required and must be between 3 and 100 characters");
    }

    // Validate description (optional, but if present, should be a string with max 500 characters)
    if (description && (typeof description !== "string" || description.trim().length > 500)) {
        errors.push("Description: must be a string with a maximum of 500 characters.");
    }

    // Validate completed (must be a boolean if provided)
    if (completed !== undefined && completed != "true" && completed != "false"  ) {
        errors.push("Completed: must be a boolean value (true or false).");
    }
    console.log(typeof completed);

    if (errors.length > 0){
        return res.status(400).json({errors})
    }

    next(); // Proceed to next middleware or to the controller function

}

export default validateTodo;