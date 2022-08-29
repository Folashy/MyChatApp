import { DataTypes, Model } from "sequelize";
import db from '../config/db.config'

interface ConversationAttributes {
    members: string;
    
}

export  class ConversationInstance extends Model<ConversationAttributes>{}

ConversationInstance.init({
    members:{
        type:DataTypes.STRING
      
    },
  
  
    
    },{
    sequelize:db,
    tableName:'conversation'
});

