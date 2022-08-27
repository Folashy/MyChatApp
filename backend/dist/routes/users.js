"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
const user_js_1 = require("../controller/user.js");
/* GET users listing. */
router.post('/signup', user_js_1.signupUser);
router.post("/login", user_js_1.loginUser);
router.post("/logout", user_js_1.logoutUser);
router.get("/api", user_js_1.getUsers);
router.get("/api/id", user_js_1.getSingleUser);
router.patch("/api/id", user_js_1.updateUser);
router.delete("/api/id", user_js_1.deleteUser);
exports.default = router;
