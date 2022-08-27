import { DataTypes, Model } from "sequelize";
import db from '../config/db.config'

interface UsersAttributes {
    id: string;
    username:string;
    fullname:string;
    email:string;
    password:string;
    phone:string;
    gender:string
}

export  class UserInstance extends Model<UsersAttributes>{}

UserInstance.init({
    id:{
        type:DataTypes.UUIDV4,
        primaryKey:true,
        allowNull:false
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notNull:{
                msg:'username is required'
            },
            notEmpty:{
                msg:"please provide a username"
            }
        }
    },
    fullname:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notNull:{
                msg:'fullname is required'
            },
            notEmpty:{
                msg:"please provide a fullname"
            }
        }
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            notNull:{
                msg:'email is required'
            },
            isEmail:{
                msg:'please provide a valid Email'
            }
        }
    },
    password:{
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

