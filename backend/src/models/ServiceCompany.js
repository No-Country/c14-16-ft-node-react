import { sequelize } from '../config/config.js';
import { DataTypes } from 'sequelize';
import { Company } from './Company.js';
import { Service } from './Service.js';

const ServiceCompany = sequelize.define('ServiceCompany', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
  });
  
Service.belongsToMany(Company, {
    through: ServiceCompany,
    foreignKey: 'service_id',
});
  
Company.belongsToMany(Service, {
    through: ServiceCompany,
    foreignKey: 'company_id',
});