"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSchema = exports.options = exports.generateToken = exports.messageSchema = exports.postSchema = exports.loginSchema = exports.registerSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.registerSchema = joi_1.default.object().keys({
    username: joi_1.default.string().required(),
    fullname: joi_1.default.string().required(),
    email: joi_1.default.string().trim().lowercase().required(),
    password: joi_1.default.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    confirm_password: joi_1.default.ref("password")
}).with('password', 'confirm_password');
exports.loginSchema = joi_1.default.object().keys({
    email: joi_1.default.string().trim().lowercase().required(),
    password: joi_1.default.string().regex(/^[a-zA-Z0-9]{3,30}$/),
});
exports.postSchema = joi_1.default.object().keys({
    img: joi_1.default.string(),
    desc: joi_1.default.string()
});
exports.messageSchema = joi_1.default.object().keys({
    conversationId: joi_1.default.string().required(),
    sender: joi_1.default.string().required(),
    text: joi_1.default.string()
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
