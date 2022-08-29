"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageInstance = void 0;
const sequelize_1 = require("sequelize");
const db_config_1 = __importDefault(require("../config/db.config"));
class MessageInstance extends sequelize_1.Model {
}
exports.MessageInstance = MessageInstance;
MessageInstance.init({
    conversationId: {
        type: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    sender: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    text: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    sequelize: db_config_1.default,
    tableName: 'message'
});
