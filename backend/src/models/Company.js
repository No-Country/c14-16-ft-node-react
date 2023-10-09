import { sequelize } from '../config/config.js';
import { DataTypes } from 'sequelize';

export const Company = sequelize.define('Company',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false
});
