"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMessage = exports.updateMessage = exports.getMessage = exports.postMessage = void 0;
const uuid_1 = require("uuid");
const message_1 = require("../models/message");
const utils_1 = require("../utils/utils");
// create message
async function postMessage(req, res, next) {
    const id = (0, uuid_1.v4)();
    try {
        const validationResult = utils_1.messageSchema.validate(req.body, utils_1.options);
        if (validationResult.error) {
            return res.status(400).json({
                Error: validationResult.error.details[0].message
            });
        }
        const record = await message_1.MessageInstance.create({
            conversationId: id,
            sender: req.body.sender,
            text: req.body.text,
        });
        res.status(201).json({
            msg: "Success, Message sent",
            record
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'Error, Message not sent',
            route: '/'
        });
    }
}
exports.postMessage = postMessage;
;
// get message
async function getMessage(req, res, next) {
    try {
        const { id } = req.params;
        const record = await message_1.MessageInstance.findAll({ where: {} });
        res.status(200).json({
            msg: "You have succesfully fetch all messages",
            record
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'failed',
            route: "/"
        });
    }
}
exports.getMessage = getMessage;
;
//update a message
async function updateMessage(req, res, next) {
    try {
        const { id } = req.params;
        const { conversationId, sender, text } = req.body;
        const validationResult = utils_1.messageSchema.validate(req.body, utils_1.options);
        if (validationResult.error) {
            return res.status(400).json({
                Error: validationResult.error.details[0].message,
            });
        }
        const record = await message_1.MessageInstance.findOne({ where: { conversationId } });
        if (!record) {
            return res.status(404).json({
                Error: "Cannot find existing message",
            });
        }
        const updatedrecord = await record.update({
            conversationId,
            sender,
            text
        });
        // res.redirect('/update')
        res.status(200).json({
            msg: "You have successfully updated a message",
            updatedrecord,
        });
    }
    catch (error) {
        res.status(500).json({
            msg: "failed to update",
            route: "/",
        });
    }
}
exports.updateMessage = updateMessage;
;
//delete a message
async function deleteMessage(req, res, next) {
}
exports.deleteMessage = deleteMessage;
;
