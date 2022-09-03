"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMessage = exports.updateMessage = exports.createMessage = exports.postMessage = void 0;
// import {UserInstance} from '../models/user'
// import {postSchema} from '../utils/utils'
// create message
async function postMessage(req, res, next) {
    res.json({
        msg: "create message logic"
    });
}
exports.postMessage = postMessage;
;
// get message
async function createMessage(req, res, next) {
    res.json({
        msg: "get message logic"
    });
}
exports.createMessage = createMessage;
;
//update a message
async function updateMessage(req, res, next) {
    res.json({
        msg: "update message logic"
    });
}
exports.updateMessage = updateMessage;
;
//delete a message
async function deleteMessage(req, res, next) {
    res.json({
        msg: "delete message logic"
    });
}
exports.deleteMessage = deleteMessage;
;
// get timeline posts
// export async function getTimelinePost (req: Request, res: Response, next: NextFunction) {
//     res.json({
//         msg: "get timeline message logic"
//     });
// };
