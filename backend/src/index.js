import express from 'express';
import cors  from 'cors';
import { AuthRouter } from './routes/AuthRouter.js';
//conexion a la base de datos
import './config/config.js';
//creacion de tablas
import './models/index.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/user', AuthRouter);


app.listen( PORT, () =>{
    console.log(`Port runing in port http://localhost:${PORT}`);
})