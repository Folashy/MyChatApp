import express, {Request, Response, NextFunction} from 'express';
var router = express.Router();
import {
    getMessage,
    postMessage,
    updateMessage,
    deleteMessage,
} from '../controller/messageController'

// create message
router.post('/', postMessage)

//get message
router.get('/', getMessage);

// update message
router.patch('/:id',updateMessage)

// delete message
router.delete("/:id",deleteMessage)

export default router;