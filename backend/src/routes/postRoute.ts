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
router.post('/create', createPost);

//update a post
router.put('/update/:id', updatePost)

//get single post
router.get("/sg/:id",getSinglePost)

//get all user post
router.get("/", getAllUsersPost)



//delete a post
router.delete('/delete/:id',deletePost)

//get timeline Posts
router.get("/timeline/:userId",getTimelinePost)


//like or dislike a post
router.post("/:id/like",(req,res)=>{
    res.send("dislike")
})


export default router;