"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getSingleUser = exports.getUsers = exports.logoutUser = exports.loginUser = exports.signupUser = void 0;
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
/* GET users listing. */
function signupUser(req, res, next) {
    res.json({
        msg: "sign up user route"
    });
}
exports.signupUser = signupUser;
;
/* GET users listing. */
function loginUser(req, res, next) {
    res.json({
        msg: "login user route"
    });
}
exports.loginUser = loginUser;
;
/* GET users listing. */
function logoutUser(req, res, next) {
    res.json({
        msg: "logout user route"
    });
}
exports.logoutUser = logoutUser;
;
/* GET ALL USERS users listing. */
function getUsers(req, res, next) {
    res.json({
        msg: "get all users route"
    });
}
exports.getUsers = getUsers;
;
/* GET SINGLE users listing. */
function getSingleUser(req, res, next) {
    res.json({
        msg: "get single user route"
    });
}
exports.getSingleUser = getSingleUser;
;
/* UPDATE users listing. */
function updateUser(req, res, next) {
    res.json({
        msg: "update user route"
    });
}
exports.updateUser = updateUser;
;
/* DELETE users listing. */
function deleteUser(req, res, next) {
    res.json({
        msg: "delete user route"
    });
}
exports.deleteUser = deleteUser;
;
