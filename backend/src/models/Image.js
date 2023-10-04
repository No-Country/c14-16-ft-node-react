import { sequelize } from '../config/config.js';
import { DataTypes } from 'sequelize';

export const Image = sequelize.define('Image', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    route: {
      type: DataTypes.STRING,
      allowNull: false,
    },
});

Image.belongsTo(Post, {
   foreignKey: 'branch_id',
});