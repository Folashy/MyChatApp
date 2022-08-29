"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSchema = exports.options = exports.generateToken = exports.loginSchema = exports.registerSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// export const registerSchema = Joi.object().keys({
//     username:Joi.string().required(),
//     fullname:Joi.string().required(),
//     email:Joi.string().trim().lowercase().required(),
//     password:Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
//     confirm_password:Joi.ref("password"),
//     phone:Joi.string().required()
// }).with('password', 'confirm_password')
exports.registerSchema = joi_1.default.object().keys({
    username: joi_1.default.string().required(),
    fullname: joi_1.default.string().required(),
    email: joi_1.default.string().trim().lowercase().required(),
    phone: joi_1.default.string().required(),
    password: joi_1.default.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    confirm_password: joi_1.default.ref("password")
}).with('password', 'confirm_password');
exports.loginSchema = joi_1.default.object().keys({
    email: joi_1.default.string().trim().lowercase().required(),
    password: joi_1.default.string().regex(/^[a-zA-Z0-9]{3,30}$/),
});
//Generate Token
const generateToken = (user) => {
    const pass = `${process.env.JWT_SECRET}`;
    return jsonwebtoken_1.default.sign(user, pass, { expiresIn: '3d' });
};
exports.generateToken = generateToken;
exports.options = {
    abortEarly: false,
    errors: {
        wrap: {
            label: ''
        }
    }
};
exports.updateSchema = joi_1.default.object().keys({
    username: joi_1.default.string().lowercase(),
    fullname: joi_1.default.string().lowercase(),
    email: joi_1.default.string(),
    phone: joi_1.default.string(),
    password: joi_1.default.string()
});
