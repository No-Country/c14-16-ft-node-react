import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

//importar variables desde .env
dotenv.config();

//'database','username','password'
export const sequelize = new Sequelize('pets',process.env.DB_USER, process.env.DB_PASSWORD,{
    host:'localhost',
    dialect: 'mysql'
});

try {
    await sequelize.authenticate();
    console.log('Connection has been establish successfully');
} catch (error) {
    console.log(process.env.DB_USER)
    console.log(process.env.DB_PASSWORD)
    console.log('unable to connect to database:', error);
}