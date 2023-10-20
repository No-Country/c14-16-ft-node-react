import { sequelize } from '../config/config.js';
import { DataTypes } from 'sequelize';
import { Company } from './Company.js';
import { Image } from './Image.js';
import { Rate } from './Rate.js';

export const Branch = sequelize.define('Branch',{
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
    },
    city:{
        type: DataTypes.STRING,
        allowNull: false
    },
    capacity:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    amount:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    phone:{
        type: DataTypes.STRING,
        allowNull: false
    },
    price_km:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    address:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false
});

Branch.belongsTo(Company, {
    foreignKey: 'company_id',
    allowNull: false,
    onDelete: 'CASCADE',
    hooks: true,
});

Branch.hasMany(Image, {
    foreignKey: 'branch_id',
    onDelete: 'CASCADE', 
    hooks: true,
    as: 'images',
}
);

Branch.hasMany(Rate, {
    foreignKey: 'branch_id',
    onDelete: 'CASCADE',
    allowNull: false,
    hooks: true,
    as: 'rates',
}
);