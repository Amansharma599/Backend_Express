//Import model
const Post = require("../models/postModel")
const Like = require("../models/likeModel")

//   Business Logic..
// Like a post
exports.likePost = async (req,res)=>{
  try{
  //    fetch Data from the req body
  const {post,user} = req.body;
  
  // Create a Like object
  const like = new Like({
      post,user
  });

  // Save the new Like init the DataBase..
  const savedLike = await like.save();

  // Find the post by ID , add the new comment to its comments array
  const updatePost = await Post.findByIdAndUpdate(post,{$push: {likes: savedLike._id}},{new:true} )
  .populate("likes") //populate the comments array with comment documents
    .exec();
  

  res.json({
      post: updatePost,
  });
  }
  catch(error){
      return res.status(400).json({
          error: "Error While Fetching Like"
      })

  }
}

exports.unlikePost =async(req,res) =>{
    try{
        const {post,like} = req.body;

        // find and deleted likes collection me say
        const deletedLike = await Like.findOneAndDelete({post:post, _id:like});

        // update the post collection
        const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{likes: deletedLike._id}},{new: true})

        res.json({
            post: updatedPost,
        });

    }
    catch(error){
        return res.status(400).json({
            error: "Error While Unliking Post"
        })
    }
}

exports.dummyLink = (req,res) =>{
res.send("This is your Dummy page")
}