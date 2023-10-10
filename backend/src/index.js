import express from 'express';
import cors  from 'cors';
import { ClientRouter } from './routes/ClientRouter.js';
import { CompanyRouter } from './routes/CompanyRouter.js';
import { PetRouter } from './routes/PetRouter.js';
import { AuthRouter } from './routes/AuthRouter.js';
import { ServiceRouter } from './routes/ServiceRouter.js';
import { AnimalTypesRouter } from './routes/AnimalTypeRouter.js';
import { BranchRouter } from './routes/BranchRouter.js';

//conexion a la base de datos
import './config/config.js';
//creacion de tablas
import './models/index.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", AuthRouter)
app.use('/api/clients', ClientRouter);
app.use('/api/companies', CompanyRouter);
app.use('/api/pets', PetRouter);
app.use("/api/services", ServiceRouter)
app.use("/api/animaltypes", AnimalTypesRouter)
app.use("/api/branches", BranchRouter)


app.listen( PORT, () =>{
    console.log(`Port runing in port http://localhost:${PORT}`);
})