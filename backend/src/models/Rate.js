import { sequelize } from '../config/config.js';
import { DataTypes } from 'sequelize';
import { Branch } from './Branch.js'

export const Rate = sequelize.define('Rate',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    weightFrom:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    weightTo:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    price:{
        type: DataTypes.FLOAT,
        allowNull: false
    }
},{
    timestamps: false
});
