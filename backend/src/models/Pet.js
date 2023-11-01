import { sequelize } from '../config/config.js';
import { DataTypes } from 'sequelize';
import { Client } from './Client.js';
import { AnimalTypes } from './AnimalTypes.js';

export const Pet = sequelize.define('Pet',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    breed:{
        type: DataTypes.STRING,
        allowNull: true
    },
    weight:{
        type: DataTypes.FLOAT,
        allowNull: false
    }
},{
    timestamps: false
});

Pet.belongsTo(Client, {
    foreignKey: 'client_id',
    allowNull: false,
    onDelete: "CASCADE",
    hooks: true
});

Pet.belongsTo(AnimalTypes, {
    foreignKey: 'type_id',
    as: 'types',
    allowNull: false,
});
