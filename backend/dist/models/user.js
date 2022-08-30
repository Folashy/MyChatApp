"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInstance = void 0;
const sequelize_1 = require("sequelize");
const db_config_1 = __importDefault(require("../config/db.config"));
const post_1 = require("./post");
class UserInstance extends sequelize_1.Model {
}
exports.UserInstance = UserInstance;
UserInstance.init({
    id: {
        type: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
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
        type: sequelize_1.DataTypes.STRING,
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
        type: sequelize_1.DataTypes.STRING,
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
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'password is required'
            },
            notEmpty: {
                msg: 'please provide a valid password'
            }
        }
    },
    profilePicture: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
    },
    coverPicture: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
    },
    isAdmin: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false
    },
    desc: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
    },
    from: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
    },
    relationship: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
    },
    gender: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: db_config_1.default,
    tableName: 'user'
});
UserInstance.hasMany(post_1.PostInstance, { foreignKey: 'UserId',
    as: 'post'
});
post_1.PostInstance.belongsTo(UserInstance, { foreignKey: 'UserId',
    as: 'user' });
// UserInstance.hasMany(PostInstance, {foreignKey:'UserId',
// as:'post'
// })
// PostInstance.belongsTo(UserInstance,{foreignKey:'UserId',
// as:'user'}) 
