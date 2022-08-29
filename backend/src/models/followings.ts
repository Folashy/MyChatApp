import { DataTypes, Model } from "sequelize";
import db from '../config/db.config'

interface FollowingAttributes {
    followingId: string;
    UserId:string;
}

export  class FollowingInstance extends Model<FollowingAttributes>{}

FollowingInstance.init({
    followingId:{
        type:DataTypes.STRING
      
    },
    UserId:{
        type:DataTypes.STRING,
    },
  
    
    },{
    sequelize:db,
    tableName:'following'
});

