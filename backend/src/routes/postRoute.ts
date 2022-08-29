import express, {Request, Response, NextFunction} from 'express';
var router = express.Router();
import {
    createPost,
    updatePost,
    deletePost,
    likePost,
    getAllUsersPost,
    getSinglePost,
    getTimelinePost
} from '../controller/postController'

/* GET home page. */

//create a post
router.post('/',(req,res)=>{
    res.send("Welcome to create post")
});


//update a post
router.put('/update',createPost)

//delete a post
router.delete('/update',deletePost)

//like or dislike a post
router.post("/:id/like",(req,res)=>{
    res.send("dislike")
})

//get single post
router.get("/:id",getSinglePost)

//get timeline Posts
router.get("/timeline/:userId",getTimelinePost)

//get all post for one user
router.get("/profile/:username",(req,res)=>{
    res.send("all User's post")
})







export default router;