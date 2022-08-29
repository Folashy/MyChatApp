import { DataTypes, Model } from "sequelize";
import db from '../config/db.config'

interface MessageAttributes {
    conversationId: string;
    sender:string;
    text:string;
}

export  class MessageInstance extends Model<MessageAttributes>{}

MessageInstance.init({
    conversationId:{
        type:DataTypes.UUIDV4,
        primaryKey:true,
        allowNull:false
    },
    sender:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    text:{
        type:DataTypes.STRING,
       
    },
    
    },{
    sequelize:db,
    tableName:'message'
});

