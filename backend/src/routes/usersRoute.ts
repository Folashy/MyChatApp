import express from 'express';
var router = express.Router();

import {
  signupUser,
  loginUser,
  logoutUser,
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser
} from '../controller/user.js'

/* GET users listing. */
router.get('/about', (req,res)=>{
  res.send("about")
})


router.get("/", getUsers);
router.get("/:id", getSingleUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);
//get friends
router.get('/friends/:userId',(req,res)=>{
  res.send("get all frends")
})
//follow a user route
router.post("/:id/follow",(req,res)=>{
  res.send("following a user")
})

//unfollow a user 
router.delete("/:id/unfollow",(req,res)=>{
  res.send("router to unfollow user")
})

export default router;

