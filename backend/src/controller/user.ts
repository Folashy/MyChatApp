import express, {Request, Response, NextFunction} from 'express';
var router = express.Router();

/* GET users listing. */
export function signupUser (req: Request, res: Response, next: NextFunction) {
    res.json({
        msg: "sign up user route"
    });
};

/* GET users listing. */
export function loginUser (req: Request, res: Response, next: NextFunction) {
    res.json({
        msg: "login user route"
    });
};

/* GET users listing. */
export function logoutUser (req: Request, res: Response, next: NextFunction) {
    res.json({
        msg: "logout user route"
    });
};

/* GET ALL USERS users listing. */
export function getUsers (req: Request, res: Response, next: NextFunction) {
    res.json({
        msg: "get all users route"
    });
};

/* GET SINGLE users listing. */
export function getSingleUser (req: Request, res: Response, next: NextFunction) {
    res.json({
        msg: "get single user route"
    });
};

/* UPDATE users listing. */
export function updateUser (req: Request, res: Response, next: NextFunction) {
    res.json({
        msg: "update user route"
    });
};

/* DELETE users listing. */
export function deleteUser (req: Request, res: Response, next: NextFunction) {
    res.json({
        msg: "delete user route"
    });
};


