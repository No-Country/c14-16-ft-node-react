import { sequelize } from '../config/config.js';
import { DataTypes } from 'sequelize';

export const Client = sequelize.define('Client',{
    name:{
        type: DataTypes.STRING
    }
},{
    timestamps: false
});
