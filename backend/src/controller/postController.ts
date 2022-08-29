import express, {Request, Response, NextFunction} from 'express';
import {v4 as uuidv4} from 'uuid'
import {PostInstance} from '../models/post'
import {UserInstance} from '../models/user'
import {postSchema} from '../utils/utils'

// create post
export async function createPost (req: Request, res: Response, next: NextFunction) {
    res.json({
        msg: "create post logic"
    });
};


//update a post
export async function updatePost (req: Request, res: Response, next: NextFunction) {
    res.json({
        msg: "update post logic"
    });
};

//delete a post
export async function deletePost (req: Request, res: Response, next: NextFunction) {
    res.json({
        msg: "delete post logic"
    });
};


//like or dislike a post
export async function likePost (req: Request, res: Response, next: NextFunction) {
    res.json({
        msg: "like post logic"
    });

};

//get a post

export async function getSinglePost (req: Request, res: Response, next: NextFunction) {
    res.json({
        msg: "get a post logic"
    });
};

// get timeline posts

export async function getTimelinePost (req: Request, res: Response, next: NextFunction) {
    res.json({
        msg: "get timeline post logic"
    });
};

//get user's all posts

export async function getAllUsersPost (req: Request, res: Response, next: NextFunction) {
    res.json({
        msg: "getAllUsers post logic"
    });
};