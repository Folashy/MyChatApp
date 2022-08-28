import Joi from 'joi'
import jwt from 'jsonwebtoken'




// export const registerSchema = Joi.object().keys({
//     username:Joi.string().required(),
//     fullname:Joi.string().required(),
//     email:Joi.string().trim().lowercase().required(),
//     password:Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
//     confirm_password:Joi.ref("password"),
//     phone:Joi.string().required()

// }).with('password', 'confirm_password')
export const registerSchema = Joi.object().keys({
    username:Joi.string().required(),
    fullname:Joi.string().required(),
    email:Joi.string().trim().lowercase().required(),
    phone:Joi.string().required(),
    password:Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    confirm_password:Joi.ref("password")
}).with('password', 'confirm_password')

export const loginSchema = Joi.object().keys({
    email:Joi.string().trim().lowercase().required(),
    password:Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
  
})

//Generate Token
export const generateToken=(user:{[key:string]:unknown}):unknown=>{
  const pass = `${process.env.JWT_SECRET}` as string
   return jwt.sign(user,pass, {expiresIn:'3d'})
}

export const options ={
    abortEarly:false,
    errors:{
        wrap:{
            label: ''
        }
    }
} 