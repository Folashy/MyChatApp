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
router.post('/create', postController_1.createPost);
//update a post
router.put('/update/:id', postController_1.updatePost);
//get single post
router.get("/sg/:id", postController_1.getSinglePost);
//get all user post
router.get("/", postController_1.getAllUsersPost);
//delete a post
router.delete('/delete/:id', postController_1.deletePost);
//get timeline Posts
router.get("/timeline/:userId", postController_1.getTimelinePost);
//like or dislike a post
router.post("/:id/like", (req, res) => {
    res.send("dislike");
});
exports.default = router;
