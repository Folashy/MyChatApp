import express, {Request, Response, NextFunction} from 'express';
var router = express.Router();
import {signupUser,loginUser,logoutUser} from '../controller/user'

/* GET home page. */
router.post('/register',signupUser);

router.post('/login',loginUser)

// styts

export default router; 