import { DataTypes, Model } from "sequelize";
import db from '../config/db.config'

interface UsersAttributes {
    id: string;
    username:string;
    fullname:string;
    email:string;
    password: string;
    profilePicture: string;
    coverPicture: string;
    isAdmin: boolean;
    desc: string;
    city: string;
    from: string;
    relationship: string;
    phone:string;
    gender:string
}

export  class UserInstance extends Model<UsersAttributes>{}

UserInstance.init({
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'username is required'
            },
            notEmpty: {
                msg: "please provide a username"
            }
        }
    },
    fullname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'fullname is required'
            },
            notEmpty: {
                msg: "please provide a fullname"
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: 'email is required'
            },
            isEmail: {
                msg: 'please provide a valid Email'
            }
        }
    },
    profilePicture: {
        type: DataTypes.STRING,
        allowNull: false
    },
    coverPicture: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    desc: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    from: {
        type: DataTypes.STRING,
        allowNull: false
    },
    relationship: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            notNull:{
                msg:'password is required'
            },
            notEmpty:{
                msg:'please provide a valid password'
            }
        }
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notNull:{
                msg:'phone is required'
            },
            notEmpty:{
                msg:"please provide a phone"
            }
        }
    },
    gender:{
        type:DataTypes.STRING,
        allowNull:false
    },
},{
    sequelize:db,
    tableName:'user'
});

