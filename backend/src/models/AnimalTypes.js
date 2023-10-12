import { sequelize } from '../config/config.js';
import { DataTypes } from 'sequelize';

export const AnimalTypes = sequelize.define('AnimalTypes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    timestamps: false
});