// Import the todo
const Todo = require("../models/Todo");

// Define route handler..
exports.updateTodo = async(req,res) => {
    try{
    //    extract Todo items basis on Id
    const {id} = req.params;
    const {title,description} = req.body;

    const todo = await Todo.findByIdAndUpdate(
        {_id:id},
        {title,description,updateat: Date.now()}
    )
    
    // Data for Given Id Found.
    res.status(200).json({
        success:true,
        data:todo,
        message:'Updated successfully '
    })

    }
    catch(err){
        console.error(err);
        res.status(500).json(
            {
                success:false,
                error:err.message,
                message:'Server Error',
            })
    }   
}
