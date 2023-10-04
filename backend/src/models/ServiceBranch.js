import { sequelize } from '../config/config.js';
import { DataTypes } from 'sequelize';
import { Branch } from './Branch.js';
import { Service } from './Service.js';

export const ServiceBranch = sequelize.define('ServiceBranch', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
  });
  
Service.belongsToMany(Branch, {
    through: ServiceBranch,
    foreignKey: 'service_id',
});
  
Branch.belongsToMany(Service, {
    through: ServiceBranch,
    foreignKey: 'company_id',
});