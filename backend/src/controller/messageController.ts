import express, {Request, Response, NextFunction} from 'express';
import {v4 as uuidv4} from 'uuid'
import {MessageInstance} from '../models/message'
// import {UserInstance} from '../models/user'
// import {postSchema} from '../utils/utils'

// create message
export async function postMessage (req: Request, res: Response, next: NextFunction) {
    res.json({
        msg: "create message logic"
    });
};

// get message
export async function createMessage (req: Request, res: Response, next: NextFunction) {
    res.json({
        msg: "get message logic"
    });
};

//update a message
export async function updateMessage (req: Request, res: Response, next: NextFunction) {
    res.json({
        msg: "update message logic"
    });
};

//delete a message
export async function deleteMessage (req: Request, res: Response, next: NextFunction) {
    res.json({
        msg: "delete message logic"
    });
};

// get timeline posts
// export async function getTimelinePost (req: Request, res: Response, next: NextFunction) {
//     res.json({
//         msg: "get timeline message logic"
//     });
// };

