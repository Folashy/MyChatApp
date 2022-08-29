"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unFollow = exports.follow = void 0;
async function follow(req, res, next) {
    res.status(201).json({
        msg: "followed successfully"
    });
}
exports.follow = follow;
async function unFollow(req, res, next) {
    res.status(201).json({
        msg: "Unfollowed successfully"
    });
}
exports.unFollow = unFollow;
