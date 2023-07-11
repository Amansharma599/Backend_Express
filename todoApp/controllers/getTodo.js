// Import the todo
const Todo = require("../models/Todo");

// Define route handler..
exports.getTodo = async(req,res) => {
    try{
    //    Fetch all data Todo items from Database.
    const todos = await Todo.find({})

    // response.
    res.status(200).json({
        success:true,
        data:todos,
        message:'Entire Todo Data Fetch'

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
