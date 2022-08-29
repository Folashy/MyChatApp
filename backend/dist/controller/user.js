"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unfollow = exports.follow = exports.deleteUser = exports.updateUser = exports.getSingleUser = exports.getUsers = exports.logoutUser = exports.loginUser = exports.signupUser = void 0;
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
            profilePicture: req.body.profilePicture,
            coverPicture: req.body.coverPicture,
            isAdmin: false,
            desc: req.body.desc,
            city: req.body.city,
            from: req.body.from,
            relationship: req.body.relationship,
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
    const id = (0, uuid_1.v4)();
    try {
        const validationResult = utils_1.loginSchema.validate(req.body, utils_1.options);
        if (validationResult.error) {
            return res.status(400).json({
                Error: validationResult.error.details[0].message
            });
        }
        const User = await user_1.UserInstance.findOne({ where: { email: req.body.email } });
        const { id } = User;
        const token = (0, utils_1.generateToken)({ id });
        const validUser = await bcryptjs_1.default.compare(req.body.password, User.password);
        if (!validUser) {
            res.status(401).json({
                message: "Password do not match"
            });
        }
        if (validUser) {
            res.json({
                msg: "login user route"
            });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'failed to login',
            route: '/login'
        });
    }
}
exports.loginUser = loginUser;
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
    try {
        const limit = req.query?.limit;
        const offset = req.query?.offset;
        const record = await user_1.UserInstance.findAll({ where: {} });
        res.status(200).json({
            msg: "You have succesfully fetch all app",
            record
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'failed to read',
            route: "/read"
        });
    }
}
exports.getUsers = getUsers;
/* GET SINGLE users listing. */
async function getSingleUser(req, res, next) {
    try {
        const { id } = req.params;
        const record = await user_1.UserInstance.findOne({ where: { id } });
        // return record 
        return res.status(200).json({
            msg: "get single user route",
            record
        });
    }
    catch (error) {
        res.status(500).json({
            msg: "failed to read single user",
            route: "/read/:id"
        });
    }
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
async function deleteUser(req, res, next) {
    try {
        const { id } = req.params;
        const record = await user_1.UserInstance.findOne({ where: { id } });
        if (!record) {
            return res.status(404).json({
                msg: "Cannot find user",
                record
            });
        }
        const deletedRecord = await record.destroy();
        return res.status(200).json({
            msg: "User deleted successfully",
        });
    }
    catch (error) {
        res.status(500).json({
            msg: "failed to delete",
            route: "/delete/:id"
        });
    }
}
exports.deleteUser = deleteUser;
;
//follow a user
async function follow(req, res, next) {
    res.json({
        msg: "delete user route"
    });
}
exports.follow = follow;
;
//unfollow a user
async function unfollow(req, res, next) {
    res.json({
        msg: "delete user route"
    });
}
exports.unfollow = unfollow;
;
