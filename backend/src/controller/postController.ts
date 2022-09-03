import express, {Request, Response, NextFunction} from 'express';
import {v4 as uuidv4} from 'uuid'
import {PostInstance} from '../models/post'
import {UserInstance} from '../models/user'
import {postSchema, options} from '../utils/utils'

// create post
export async function createPost (req: Request, res: Response, next: NextFunction) {
    {
        const id = uuidv4();
        const userId = uuidv4();
        try {
          const validationResult = postSchema.validate(req.body, options);
          if (validationResult.error) {
            return res.status(400).json({
              Error: validationResult.error.details[0].message,
            });
          }
          const record = await PostInstance.create({
              id,
              userId,
            ...req.body
          });
          res.status(201).json({
            msg: "You have created a post",
            record,
          });
        } catch (err) {
          console.log(err);
          res.status(500).json({
            msg: "failed to post",
            route: "/",
          });
        }
    }
}

// create post
// export async function createPost (req: Request, res: Response, next: NextFunction) {
//     res.json({
//         msg: "create post logic"
//     });
// };


//update a post
export async function updatePost (req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const { UserId, desc, img} = req.body;
        const validationResult = postSchema.validate(req.body, options);
        if (validationResult.error) {
          return res.status(400).json({
            Error: validationResult.error.details[0].message,
          });
        }
    
        const record = await PostInstance.findOne({ where: { id } });
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
      } catch (error) {
        res.status(500).json({
          msg: "failed to update",
          route: "/update",
        });
      }
    
    
    
    // res.json({
    //     msg: "update post logic"
    // });
};


//get a post

export async function getSinglePost (req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const record = await PostInstance.findOne({ where: { id } });
    return res.status(200).json({
      msg: "Successfully gotten user information",
      record,
    });
      
  } catch (error) {
    res.status(500).json({
      msg: "failed to read user post",
    //   route: "/read/:id",
    });
  }
  
    // res.json({
    //     msg: "get a post logic"
    // });
};

//get user's all posts

export async function getAllUsersPost (req: Request, res: Response, next: NextFunction) {

       {
        try {
          const limit = req.query?.limit as number | undefined;
          const offset = req.query?.offset as number | undefined;
      
          const record = await PostInstance.findAll({where:{},
            limit,
            offset,
            include: [
              {
                model: UserInstance,
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
          
        } catch (error) {
          res.status(500).json({
            msg: "failed to read",
            route: "/",
          });
        }
    }
    }



//get delete post
export async function deletePost (req: Request, res: Response, next: NextFunction) {
    
    try {
    const { id } = req.params;
    const record = await PostInstance.findOne({ where: { id } });
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
  } catch (error) {
    res.status(500).json({
      msg: "failed to delete",
      route: "/delete/:id",
    });
  }
    
    
    // res.json({
    //     msg: "like post logic"
    // });

};

//get like post
export async function likePost (req: Request, res: Response, next: NextFunction) {
    res.json({
        msg: "like post logic"
    });

};

// get timeline posts

export async function getTimelinePost (req: Request, res: Response, next: NextFunction) {
    res.json({
        msg: "get timeline post logic"
    });
};

