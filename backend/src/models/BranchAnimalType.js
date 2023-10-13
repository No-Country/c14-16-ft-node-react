import { sequelize } from '../config/config.js';
import { DataTypes } from 'sequelize';
import { AnimalTypes } from './AnimalTypes.js';
import { Branch } from './Branch.js';

export const BranchAnimalTypes = sequelize.define('BranchAnimalType', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }
},{
    timestamps: false
})

Branch.belongsToMany(AnimalTypes, {
    through: BranchAnimalTypes, 
    foreignKey: 'branch_id',
    as: 'animalTypes',
    onDelete: "CASCADE",
    hooks: true
});
AnimalTypes.belongsToMany(Branch, {
    through: BranchAnimalTypes,
    foreignKey: 'animal_type_id',
    onDelete: "CASCADE",
    hooks: true
});