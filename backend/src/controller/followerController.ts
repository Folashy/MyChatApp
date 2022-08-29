import express, {Request, Response, NextFunction} from 'express';
import {v4 as uuidv4} from 'uuid'
import {FollowersInstance} from '../models/followers'
import {FollowingInstance} from '../models/followings'
import {UserInstance} from '../models/user'

export async function follow(req:Request,res:Response,next:NextFunction) {
    res.status(201).json({
        msg:"followed successfully"
    })
}

export async function unFollow(req:Request,res:Response,next:NextFunction) {
    res.status(201).json({
        msg:"Unfollowed successfully"
    })
}