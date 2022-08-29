import { DataTypes, Model } from "sequelize";
import db from '../config/db.config'

interface FollowersAttributes {
    FollowersId: string;
    UserId:string;
}

export  class FollowersInstance extends Model<FollowersAttributes>{}

FollowersInstance.init({
    FollowersId:{
        type:DataTypes.STRING
      
    },
    UserId:{
        type:DataTypes.STRING,
     
    },
  
    
    },{
    sequelize:db,
    tableName:'followers'
});

