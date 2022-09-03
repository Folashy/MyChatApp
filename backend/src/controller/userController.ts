import express, {Request, Response, NextFunction} from 'express';
import {v4 as uuidv4} from 'uuid'
import { UserInstance } from '../models/user';
import { registerSchema,options,loginSchema,generateToken} from '../utils/utils';
var router = express.Router();
import bcrypt from 'bcryptjs'
import { ValidationError } from 'sequelize/types';

/* GET users listing. */
export async function signupUser (req: Request, res: Response, next: NextFunction) {
    const id = uuidv4()
    try{ 
        const validationResult = registerSchema.validate(req.body,options)
        if(validationResult.error){
            return res.status(400).json({
                Error:validationResult.error.details[0].message
            })
        }
        const duplicatEmail = await UserInstance.findOne({where:{email:req.body.email}})
        if(duplicatEmail){
         return res.status(409).json({
            msg:"Email is used, please change email"
         })  
        }
        const username = await UserInstance.findOne({where:{username:req.body.username}})
        if(username){
         return res.status(409).json({
            msg:"username  is used"
         })
        }
        
       const passwordHash = await bcrypt.hash(req.body.password,8)
       const record = await UserInstance.create({ 
          id:id,
          username:req.body.username,
          fullname:req.body.fullname,
          email:req.body.email,
          password:passwordHash,
          profilePicture:req.body.profilePicture,
          coverPicture:req.body.coverPicture ,
          isAdmin: false,
          desc:req.body.desc,
          city:req.body.city,
          from:req.body.from,
          relationship:req.body.relationship,
          phone:req.body.phone,
          gender:req.body.gender

        })
        
       res.status(201).json({
           msg:"You have successfully created a user",
           record
       })
    }catch(err){
        console.log(err);
       res.status(500).json({
        
        msg:'failed to register',
        route:'/signup' 
       })
    }
 
};

/* GET users listing. */
export async function loginUser(req: Request, res: Response, next: NextFunction) {
    const id = uuidv4()
    try {
        const validationResult = loginSchema.validate(req.body, options)
        if (validationResult.error) {
            return res.status(400).json({
                Error: validationResult.error.details[0].message
            })
        }
        const User = await UserInstance.findOne({ where: { email: req.body.email } }) as unknown as { [key: string]: string }
        
        const { id } = User;
        const token = generateToken({ id })
        const validUser = await bcrypt.compare(req.body.password, User.password);

        if (!validUser) {
            res.status(401).json({
                message: "Password do not match"
            })
        }
        if (validUser) {
            res.cookie("token", token, {
            maxAge: 1000 * 60 * 60 * 24,
            sameSite: "strict",
            httpOnly: true,
        });
        res.cookie("id",id, {
          maxAge: 1000 * 60 * 60 * 24 * 7,
          sameSite: "strict",
          httpOnly: true,
        })
            res.json({
                token: token,
                msg: "login Successful"
            })
        }
        }catch (err) {
            console.log(err);
            res.status(500).json({
                msg: 'failed to login',
                route: '/login'
            })
        }
        
}



/* GET users listing. */
export async function logoutUser (req: Request, res: Response, next: NextFunction) {
    if(req.cookies.token){
        res.cookie('token', '', {
            httpOnly:true,
            maxAge:1
        })
        res.redirect('/users/logout')
    }
}

/* GET ALL USERS users listing. */
export async function getUsers(req: Request, res: Response, next: NextFunction) {
    try {
        const limit = req.query?.limit as number | undefined;
        const offset = req.query?.offset as number | undefined;
        const record = await UserInstance.findAll({where: {}})
        res.status(200).json({
            msg: "You have succesfully fetch all app",
            record 
        });
    } catch (error) {
        res.status(500).json({
            msg: 'failed to read',
            route: "/read"
        });
    }
}

/* GET SINGLE users listing. */
export async function getSingleUser(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const record = await UserInstance.findOne({ where: { id } });
        // return record 
        return res.status(200).json({
            msg: "get single user route",
            record
        });
    } catch (error) {
        res.status(500).json({
            msg: "failed to read single user",
            route: "/read/:id"
        })
    }
};

/* UPDATE users listing. */
export async function updateUser (req: Request, res: Response, next: NextFunction) {
    res.json({
        msg: "update user route"
    });
};

/* DELETE users listing. */
export async function deleteUser(req: Request, res: Response, next: NextFunction) {
    try{
        const { id } = req.params;
        const record = await UserInstance.findOne({ where: { id } });
        if (!record) {
            return res.status(404).json({
                msg: "Cannot find user",
                record
            });
        }
        const deletedRecord = await record.destroy();
        return res.status(200).json({
            msg: "User deleted successfully",
        })
    } catch (error) {
        res.status(500).json({
            msg: "failed to delete",
            route: "/delete/:id"
        })
    }
};

//follow a user
export async function follow (req: Request, res: Response, next: NextFunction) {
    res.json({
        msg: "delete user route"
    });
};


//unfollow a user
export async function unfollow (req: Request, res: Response, next: NextFunction) {
    res.json({
        msg: "delete user route"
    });
};