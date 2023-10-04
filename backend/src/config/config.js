import { Sequelize } from "sequelize";

//'database','username','password'
export const sequelize = new Sequelize('pets','root','',{
    host:'localhost',
    dialect: 'mysql'
});

try {
    await sequelize.authenticate();
    console.log('Connection has been establish successfully');
} catch (error) {
    console.log('unable to connect to database:', error);
}