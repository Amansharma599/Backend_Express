const Post = require("../models/postModel");

exports.createPost = async (req,res) => {
    try {
        //    fetch Data from the req body
        const {title,body} = req.body

        // Create a post object
        const post = new Post({
            title,body
        });
        const savePost = await post.save()

        res.json({
            post:savePost,
        })

    }

    catch(error){
        return res.status(400).json({
            error: "Error While Creating Post"
        });
    }

};

exports.getAllPost = async (req,res) => {
    try{
       const posts = await Post.find().populate("likes").populate("comments").exec();
       res.json({
        posts,
       })

    }

    catch(error){
        return res.status(400).json({
            error: "Error While fetch Post"
        });
    }
}
