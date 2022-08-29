"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationInstance = void 0;
const sequelize_1 = require("sequelize");
const db_config_1 = __importDefault(require("../config/db.config"));
class ConversationInstance extends sequelize_1.Model {
}
exports.ConversationInstance = ConversationInstance;
ConversationInstance.init({
    members: {
        type: sequelize_1.DataTypes.STRING
    },
}, {
    sequelize: db_config_1.default,
    tableName: 'conversation'
});
