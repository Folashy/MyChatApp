import createError from 'http-errors';
import express, {Request, Response, NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import db from './config/db.config';
import indexRouter from './routes/index';
import usersRouter from './routes/usersRoute';
import authRouter from './routes/autho';
import postRouter from './routes/postRoute';
import cors from 'cors';


db.sync().then(() => {
  console.log('Database connected on port 5000');
}).catch(err => {
  console.log(err)
});

var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/authos',authRouter);
app.use('/api/users', usersRouter);
app.use('/api/posts',postRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
