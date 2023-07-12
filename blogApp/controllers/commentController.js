//Import model
  const Post = require("../models/postModel")
  const Comment = require("../models/commentModel")

//   Business Logic..

exports.createComment = async (req,res)=>{
    try{
    //    fetch Data from the req body
    const {post,user,body} = req.body;
    
    // Create a comment object
    const comment = new Comment({
        post,user,body
    });

    // Save the new comment init the DataBase..
    const savedComment = await comment.save();

    // Find the post by ID , add the new comment to its comments array
    const updateComment = await Post.findByIdAndUpdate(post,{$push: {comments: savedComment._id}},{new:true} )
    .populate("comments") //populate the comments array with comment documents
    .exec();

    res.json({
        post: updateComment,
    });
    }
    catch(error){
        return res.status(500).json({
            error: "Error While Creating comment"
        })

    }
}