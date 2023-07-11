// Import the todo
const Todo = require("../models/Todo");

// Define route handler..
exports.getTodoById = async(req,res) => {
    try{
    //    extract Todo items basis on Id
    const id = req.params.id;
    const todo = await Todo.findById({_id: id})

    // response.
    if(!todo){
        return res.status(404).json({
            success:false,
            message:'No Data Found with This Given ID'
    
        })
    }
    // Data for Given Id Found.
    res.status(200).json({
        success:true,
        data:todo,
        message:'Todo id data successfully fetched'
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
