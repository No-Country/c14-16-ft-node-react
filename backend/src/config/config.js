import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

//importar variables desde .env
dotenv.config();

//'database','username','password'
export const sequelize = new Sequelize('pets',process.env.DB_USER, process.env.DB_PASSWORD,{
    host: process.env.DB_HOST ,
    dialect: 'mysql',
    dialectOptions: {
    ssl: {
        ca: process.env.DB_ROUTE_SSL,
        rejectUnauthorized: false,
    }
}
});

try {
    await sequelize.authenticate();
    console.log('Connection has been establish successfully');
} catch (error) {
    console.log('unable to connect to database:', error);
}