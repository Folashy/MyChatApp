"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsersPost = exports.getTimelinePost = exports.getSinglePost = exports.likePost = exports.deletePost = exports.updatePost = exports.createPost = void 0;
// create post
async function createPost(req, res, next) {
    res.json({
        msg: "create post logic"
    });
}
exports.createPost = createPost;
;
//update a post
async function updatePost(req, res, next) {
    res.json({
        msg: "update post logic"
    });
}
exports.updatePost = updatePost;
;
//delete a post
async function deletePost(req, res, next) {
    res.json({
        msg: "delete post logic"
    });
}
exports.deletePost = deletePost;
;
//like or dislike a post
async function likePost(req, res, next) {
    res.json({
        msg: "like post logic"
    });
}
exports.likePost = likePost;
;
//get a post
async function getSinglePost(req, res, next) {
    res.json({
        msg: "get a post logic"
    });
}
exports.getSinglePost = getSinglePost;
;
// get timeline posts
async function getTimelinePost(req, res, next) {
    res.json({
        msg: "get timeline post logic"
    });
}
exports.getTimelinePost = getTimelinePost;
;
//get user's all posts
async function getAllUsersPost(req, res, next) {
    res.json({
        msg: "getAllUsers post logic"
    });
}
exports.getAllUsersPost = getAllUsersPost;
;
