"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
const messageController_1 = require("../controller/messageController");
// create message
router.post('/', messageController_1.postMessage);
//get message
router.get('/', messageController_1.getMessage);
// update message
router.patch('/:id', messageController_1.updateMessage);
// delete message
router.delete("/:id", messageController_1.deleteMessage);
exports.default = router;
