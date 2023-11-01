import { sequelize } from '../config/config.js';
import { DataTypes } from 'sequelize';
import { hash } from 'bcrypt';

export const Client = sequelize.define('Client',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    phone:{
      type: DataTypes.STRING,
      allowNull: false
    },
    address:{
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    profile_picture: {
        type: DataTypes.STRING,
        allowNull: true,
    },
},{
    defaultScope: {
      attributes: { exclude: ['password'] }
    },
    timestamps: false
});

Client.beforeCreate(async (client) => {
    const hashedPassword = await hash(client.password, 10);
    client.password = hashedPassword;
});
