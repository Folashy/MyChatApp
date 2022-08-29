"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowingInstance = void 0;
const sequelize_1 = require("sequelize");
const db_config_1 = __importDefault(require("../config/db.config"));
class FollowingInstance extends sequelize_1.Model {
}
exports.FollowingInstance = FollowingInstance;
FollowingInstance.init({
    followingId: {
        type: sequelize_1.DataTypes.STRING
    },
    UserId: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    sequelize: db_config_1.default,
    tableName: 'following'
});
