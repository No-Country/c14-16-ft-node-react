import express from 'express';
import cors  from 'cors';
import { ClientRouter } from './routes/ClientRouter.js';
import { CompanyRouter } from './routes/CompanyRouter.js';
import { PetsRouter } from './routes/petsRouter.js';
//conexion a la base de datos
import './config/config.js';
//creacion de tablas
import './models/index.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/client', ClientRouter);
app.use('/api/company', CompanyRouter);
app.use('/api/pets', PetsRouter);


app.listen( PORT, () =>{
    console.log(`Port runing in port http://localhost:${PORT}`);
})