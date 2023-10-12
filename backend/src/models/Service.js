import { sequelize } from '../config/config.js';
import { DataTypes } from 'sequelize';

export const Service = sequelize.define('Service',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false
});
