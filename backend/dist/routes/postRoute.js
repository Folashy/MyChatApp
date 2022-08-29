"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
const postController_1 = require("../controller/postController");
/* GET home page. */
//create a post
router.post('/', (req, res) => {
    res.send("Welcome to create post");
});
//update a post
router.put('/update', postController_1.createPost);
//delete a post
router.delete('/update', postController_1.deletePost);
//like or dislike a post
router.post("/:id/like", (req, res) => {
    res.send("dislike");
});
//get single post
router.get("/:id", postController_1.getSinglePost);
//get timeline Posts
router.get("/timeline/:userId", postController_1.getTimelinePost);
//get all post for one user
router.get("/profile/:username", (req, res) => {
    res.send("all User's post");
});
exports.default = router;
