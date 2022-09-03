import express, {Request, Response, NextFunction} from 'express';
import {v4 as uuidv4} from 'uuid'
import {MessageInstance} from '../models/message'
import {UserInstance} from '../models/user'
import {postSchema,messageSchema, options} from '../utils/utils'

// create message
export async function postMessage (req: Request, res: Response, next: NextFunction) {
    const id = uuidv4()
    try{ 
        const validationResult = messageSchema.validate(req.body,options)
        if(validationResult.error){
            return res.status(400).json({
                Error:validationResult.error.details[0].message
            })
        }

       const record = await MessageInstance.create({ 
          conversationId:id,
          sender:req.body.sender,
          text:req.body.text,
        })
       res.status(201).json({
           msg:"Success, Message sent",
           record
       })
    }catch(err){
        console.log(err);
       res.status(500).json({
        msg:'Error, Message not sent',
        route:'/' 
       })
    }
};

// get message
export async function getMessage (req: Request, res: Response, next: NextFunction) {
    
    try {
        const { id } = req.params
        const record = await MessageInstance.findAll({where: {}})
        res.status(200).json({
            msg: "You have succesfully fetch all messages",
            record 
        });
    } catch (error) {
        res.status(500).json({
            msg: 'failed',
            route: "/"
        });
    }
};

//update a message
export async function updateMessage (req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const { conversationId, sender, text} = req.body;
        const validationResult = messageSchema.validate(req.body, options);
        if (validationResult.error) {
          return res.status(400).json({
            Error: validationResult.error.details[0].message,
          });
        }
    
        const record = await MessageInstance.findOne({ where: { conversationId } });
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
      } catch (error) {
        res.status(500).json({
          msg: "failed to update",
          route: "/",
        });
      }
};


//delete a message
export async function deleteMessage (req: Request, res: Response, next: NextFunction) {
   
};



