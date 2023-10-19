import { sequelize } from '../config/config.js';
import { DataTypes } from 'sequelize';
import { Pet } from './Pet.js';
import { Branch } from './Branch.js';

export const Booking = sequelize.define('Booking', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    from_date:{
        type: DataTypes.DATE,
        allowNull: false
    },
    to_date:{
        type: DataTypes.DATE,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    transport: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    comments: {
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    timestamps: false
});
  
Pet.belongsToMany(Branch, {
    through: Booking,
    foreignKey: 'pet_id',
});
  
Branch.belongsToMany(Pet, {
    through: Booking,
    foreignKey: 'branch_id',
});
  
  
  
  