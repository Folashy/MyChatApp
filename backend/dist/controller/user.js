"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getSingleUser = exports.getUsers = exports.logoutUser = exports.loginUser = exports.signupUser = void 0;
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
const user_1 = require("../models/user");
const utils_1 = require("../utils/utils");
var router = express_1.default.Router();
const bcryptjs_1 = __importDefault(require("bcryptjs"));
/* GET users listing. */
async function signupUser(req, res, next) {
    const id = (0, uuid_1.v4)();
    try {
        const validationResult = utils_1.registerSchema.validate(req.body, utils_1.options);
        if (validationResult.error) {
            return res.status(400).json({
                Error: validationResult.error.details[0].message
            });
        }
        const duplicatEmail = await user_1.UserInstance.findOne({ where: { email: req.body.email } });
        if (duplicatEmail) {
            return res.status(409).json({
                msg: "Email is used, please change email"
            });
        }
        const username = await user_1.UserInstance.findOne({ where: { username: req.body.username } });
        if (username) {
            return res.status(409).json({
                msg: "username  is used"
            });
        }
        const passwordHash = await bcryptjs_1.default.hash(req.body.password, 8);
        const record = await user_1.UserInstance.create({
            id: id,
            username: req.body.username,
            fullname: req.body.fullname,
            email: req.body.email,
            password: passwordHash,
            phone: req.body.phone,
            gender: req.body.gender
        });
        res.status(201).json({
            msg: "You have successfully created a user",
            record
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'failed to register',
            route: '/signup'
        });
    }
}
exports.signupUser = signupUser;
;
/* GET users listing. */
async function loginUser(req, res, next) {
    res.json({
        msg: "login user route"
    });
}
exports.loginUser = loginUser;
;
/* GET users listing. */
async function logoutUser(req, res, next) {
    if (req.cookies.token) {
        res.cookie('token', '', {
            httpOnly: true,
            maxAge: 1
        });
        res.redirect('/users/logout');
    }
}
exports.logoutUser = logoutUser;
/* GET ALL USERS users listing. */
async function getUsers(req, res, next) {
    res.json({
        msg: "get all users route"
    });
}
exports.getUsers = getUsers;
;
/* GET SINGLE users listing. */
async function getSingleUser(req, res, next) {
    res.json({
        msg: "get single user route"
    });
}
exports.getSingleUser = getSingleUser;
;
/* UPDATE users listing. */
async function updateUser(req, res, next) {
    res.json({
        msg: "update user route"
    });
}
exports.updateUser = updateUser;
;
/* DELETE users listing. */
async function deleteUser(req, res, next) {
    res.json({
        msg: "delete user route"
    });
}
exports.deleteUser = deleteUser;
;
