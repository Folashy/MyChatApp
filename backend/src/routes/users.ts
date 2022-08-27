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
router.post('/signup',signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/api", getUsers);
router.get("/api/id", getSingleUser);
router.patch("/api/id", updateUser);
router.delete("/api/id", deleteUser);

export default router;

