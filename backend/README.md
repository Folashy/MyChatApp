

### **INSTALLATION**
Open your project root directory. `cd backend` then run the 
- `yarn install` to install all packages on package.json
- `yarn dev` to start development server on port 5000
- `yarn compile` to compile typescript


### **BackEnd Structure**

The BackEnd is structured using the Model - Controller pattern. 


**DB** - MongoDB (_for local development till the zccore API endpoints for data manipulation have been finished_)

**Cloud storage** - Cloudinary (_for local development till zccore provides an API for file storage_)


### **Folder Structure**
For the BackEnd of this project, all you truly need to worry about is the `backend` folder.

```
├── backend/
├── ├── bin
├── ├   ├── wwww
├── ├── dist
│   ├── src
│   │   ├── controllers/
│   │   │   ├── user.ts
│   │   │   ├── 
│   │   ├── middlewares/
│   │   │   ├── auth.ts
│   │   │   ├── 
│   │   ├── models/
│   │   │   ├── user.ts
│   │   │   ├── 
│   │   ├── routes/
│   │   │   ├── user.ts
│   │   │   ├── index.ts
│   │   ├── utils/
│   │   │   ├── utils.ts
│   │   │   ├── db.js
├── ...
├── client
```

Since were using Model-Controller pattern (instead of the usual MVC), we have the `models` folder & the `controllers` folder along side three other folders: the `middlewares`, the `routes` & the `utils` folders.

### **Models**

Based on all the features we've planned out for our project

- *User Model*
  - userName (String)
  - _id (ObjectId) to be generated by uuid
  - avatar (String) - user image
  - email (email, unique) - to be untendicated,
  - password (String)
  - stack (String)
  - squad (Boolean)
  - company (String )
  - phone (Boolean)
  - location (String)


### **Routes** 
- **User CRUDE / ROUTES** (copy, paste, cut, delete, rename, star, pin)
  - *sign up user: `POST` `http://localhost:5000/users/signup` 
  - *get all users*: `GET` `http://localhost:5000/users/api`
  - *get single user*: `GET` `http://localhost:5000/users/api/id`
  - *update user*: `PATCH` `http://localhost:5000/users/api/id`
  - *login user*: `POST` `http://localhost:5000/users/login`
  - *logout*: `POST` `http://localhost:5000/users/logout`
  - *index route*: `GET` `http://localhost:5000`

REST API

read