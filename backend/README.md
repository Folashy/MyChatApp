### **INSTALLATION**
Open your project root directory. `cd backend` then run the 
- `yarn install` to install all packages on package.json
- `yarn dev` to start development server on port 5000
- `yarn compile` to compile typescript


### **BackEnd Structure**

The BackEnd is structured using the Model - Controller pattern. 


**DB** - `SQlite` with `sequalize`;

### **Folder Structure**
For the BackEnd of this project, all you truly need to worry about is the `backend` folder.

```
 backend/
  ├── bin
  ├── ├── wwww
  ├── dist
  ├── src
  │   ├── controllers/
  │   │   ├── user.ts
  │   │   ├── 
  │   ├── middlewares/
  │   │   ├── userAuth.ts
  │   ├── models/
  │   │   ├── followers.ts
  │   │   ├── followings.ts
  │   │   ├── message.ts
  │   │   ├── post.ts
  │   │   ├── user.ts
  │   ├── routes/
  │   │   ├── followers.ts
  │   │   ├── followings.ts
  │   │   ├── message.ts
  │   │   ├── post.ts
  │   │   ├── user.ts
  │   ├── utils/
  │   │   ├── utils.ts
  │   │   ├── db.js
 ├── app.ts

```

Since were using Model-Controller pattern (instead of the usual MVC), we have the `models` folder & the `controllers` folder along side three other folders: the `middlewares`, the `routes` & the `utils` folders.

### **Models**

Based on all the features we've planned out for our project

- *Followers Model*
    - FollowersId:type:DataTypes.STRING
    - UserId: type:DataTypes.STRING,
    - tableName:'followers'

- *Followings Model*
    - FollowersId:type:DataTypes.STRING
    - UserId: type:DataTypes.STRING,
    - tableName:'following'

  - *Message Model*
    - conversationId: type:DataTypes.UUIDV4,
    - sender: type:DataTypes.STRING,
    - text: type:DataTypes.STRING,
    - tableName:'message'

  - *Post Model*
    - id: type:DataTypes.UUIDV4,
    - UserId: type:DataTypes.STRING,
    - desc: type:DataTypes.STRING, 
    - img: type:DataTypes.STRING, 
    - tableName:'post'

  - *User Model*
    - id: type:DataTypes.UUIDV4,
    - username:type:DataTypes.STRING,
    - fullname:type:DataTypes.STRING,
    - email: type:DataTypes.STRING,
    - password: type:DataTypes.STRING,   
    - profilePicture:type:DataTypes.STRING,
    - coverPicture:type:DataTypes.STRING,
    - isAdmin: type:DataTypes.BOOLEAN,
    - desc: type:DataTypes.STRING,
    - city:type:DataTypes.STRING,
    - from:type:DataTypes.STRING,
    - relationship:type:DataTypes.STRING,
    - phone:type:DataTypes.STRING,
    - gender: type:DataTypes.STRING,  
      
    - tableName:'user'

### **Routes** 
- **User CRUDE / ROUTES** (copy, paste, cut, delete, rename, star, pin)
  - *sign up user: `POST` `http://localhost:5000/users/signup` 
  - *get all users*: `GET` `http://localhost:5000/users/api`
  - *get single user*: `GET` `http://localhost:5000/users/api/id`
  - *update user*: `PATCH` `http://localhost:5000/users/api/id`
  - *login user*: `POST` `http://localhost:5000/users/login`
  - *logout*: `POST` `http://localhost:5000/users/logout`
  - *index route*: `GET` `http://localhost:5000`

  - **POST CRUDE / ROUTES** (copy, paste, cut, delete, rename, star, pin)
  - 
 
  - **MESSAGE CRUDE / ROUTES** (copy, paste, cut, delete, rename, star, pin)
  - 


