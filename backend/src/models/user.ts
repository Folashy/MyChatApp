import { DataTypes, Model } from "sequelize";
import db from '../config/db.config'
import {PostInstance} from './post'

interface UsersAttributes {
    id: string;
    username:string;
    fullname:string;
    email:string;
    password:string;
    profilePicture:string;
    coverPicture: string;
    isAdmin: boolean;
    desc:string;
    city:string;
    from:string;
    relationship:string;
    phone:string;
    gender:string;
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
        unique:true,
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
        validate:{
            notNull:{
                msg:'password is required'
            },
            notEmpty:{
                msg:'please provide a valid password'
            }
        }
    },
    profilePicture:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:""
    },
    coverPicture:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:""
    },
    isAdmin:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    },
    desc:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:""
        
    },
    city:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:""
    },
    from:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:""
    },
    relationship:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:""
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:""
    },
    gender:{
        type:DataTypes.STRING,  
        allowNull:false,
        
        
    },
},{
    sequelize:db,
    tableName:'user'
});

UserInstance.hasMany(PostInstance, {foreignKey:'UserId',
as:'post'
})

PostInstance.belongsTo(UserInstance,{foreignKey:'UserId',
as:'user'}) 

// UserInstance.hasMany(PostInstance, {foreignKey:'UserId',
// as:'post'
// })

// PostInstance.belongsTo(UserInstance,{foreignKey:'UserId',
// as:'user'}) 
