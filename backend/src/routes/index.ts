import express, {Request, Response, NextFunction} from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    msg: "new index route"
  })
});

export default router;
