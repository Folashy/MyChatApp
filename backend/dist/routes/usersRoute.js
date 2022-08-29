"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
const user_js_1 = require("../controller/user.js");
/* GET users listing. */
router.get('/about', (req, res) => {
    res.send("about");
});
router.get("/", user_js_1.getUsers);
router.get("/:id", user_js_1.getSingleUser);
router.patch("/:id", user_js_1.updateUser);
router.delete("/:id", user_js_1.deleteUser);
//get friends
router.get('/friends/:userId', (req, res) => {
    res.send("get all frends");
});
//follow a user route
router.post("/:id/follow", (req, res) => {
    res.send("following a user");
});
//unfollow a user 
router.delete("/:id/unfollow", (req, res) => {
    res.send("router to unfollow user");
});
exports.default = router;
