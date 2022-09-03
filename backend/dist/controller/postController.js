"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimelinePost = exports.likePost = exports.deletePost = exports.getAllUsersPost = exports.getSinglePost = exports.updatePost = exports.createPost = void 0;
const uuid_1 = require("uuid");
const post_1 = require("../models/post");
const user_1 = require("../models/user");
const utils_1 = require("../utils/utils");
// create post
async function createPost(req, res, next) {
    {
        const id = (0, uuid_1.v4)();
        const userId = (0, uuid_1.v4)();
        try {
            const validationResult = utils_1.postSchema.validate(req.body, utils_1.options);
            if (validationResult.error) {
                return res.status(400).json({
                    Error: validationResult.error.details[0].message,
                });
            }
            const record = await post_1.PostInstance.create({
                id,
                userId,
                ...req.body
            });
            res.status(201).json({
                msg: "You have created a post",
                record,
            });
        }
        catch (err) {
            console.log(err);
            res.status(500).json({
                msg: "failed to post",
                route: "/",
            });
        }
    }
}
exports.createPost = createPost;
// create post
// export async function createPost (req: Request, res: Response, next: NextFunction) {
//     res.json({
//         msg: "create post logic"
//     });
// };
//update a post
async function updatePost(req, res, next) {
    try {
        const { id } = req.params;
        const { UserId, desc, img } = req.body;
        const validationResult = utils_1.postSchema.validate(req.body, utils_1.options);
        if (validationResult.error) {
            return res.status(400).json({
                Error: validationResult.error.details[0].message,
            });
        }
        const record = await post_1.PostInstance.findOne({ where: { id } });
        if (!record) {
            return res.status(404).json({
                Error: "Cannot find existing post",
            });
        }
        const updatedRecord = await record.update({
            desc,
            img
        });
        // res.redirect('/update')
        res.status(200).json({
            msg: "You have successfully updated your post",
            updatedRecord,
        });
    }
    catch (error) {
        res.status(500).json({
            msg: "failed to update",
            route: "/update",
        });
    }
    // res.json({
    //     msg: "update post logic"
    // });
}
exports.updatePost = updatePost;
;
//get a post
async function getSinglePost(req, res, next) {
    try {
        const { id } = req.params;
        const record = await post_1.PostInstance.findOne({ where: { id } });
        return res.status(200).json({
            msg: "Successfully gotten user information",
            record,
        });
    }
    catch (error) {
        res.status(500).json({
            msg: "failed to read user post",
            //   route: "/read/:id",
        });
    }
    // res.json({
    //     msg: "get a post logic"
    // });
}
exports.getSinglePost = getSinglePost;
;
//get user's all posts
async function getAllUsersPost(req, res, next) {
    {
        try {
            const limit = req.query?.limit;
            const offset = req.query?.offset;
            const record = await post_1.PostInstance.findAll({ where: {},
                limit,
                offset,
                include: [
                    {
                        model: user_1.UserInstance,
                        as: "user",
                    },
                ],
            });
            //   res.render('index', {record})
            res.status(200).json({
                msg: "You have successfully fetch all Posts",
                count: record,
                record: record,
                //   else {
                //     res.render("index", { record, title:'Posts' });
                //   }  
            });
        }
        catch (error) {
            res.status(500).json({
                msg: "failed to read",
                route: "/",
            });
        }
    }
}
exports.getAllUsersPost = getAllUsersPost;
//get delete post
async function deletePost(req, res, next) {
    try {
        const { id } = req.params;
        const record = await post_1.PostInstance.findOne({ where: { id } });
        if (!record) {
            return res.status(404).json({
                msg: "Cannot find todo",
            });
        }
        const deletedRecord = await record.destroy();
        return res.status(200).json({
            msg: "Todo deleted successfully",
            deletedRecord,
        });
    }
    catch (error) {
        res.status(500).json({
            msg: "failed to delete",
            route: "/delete/:id",
        });
    }
    // res.json({
    //     msg: "like post logic"
    // });
}
exports.deletePost = deletePost;
;
//get like post
async function likePost(req, res, next) {
    res.json({
        msg: "like post logic"
    });
}
exports.likePost = likePost;
;
// get timeline posts
async function getTimelinePost(req, res, next) {
    res.json({
        msg: "get timeline post logic"
    });
}
exports.getTimelinePost = getTimelinePost;
;
