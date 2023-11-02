import express from 'express';
import cors  from 'cors';
import { ClientRouter } from './routes/ClientRouter.js';
import { CompanyRouter } from './routes/CompanyRouter.js';
import { PetRouter } from './routes/PetRouter.js';
import { AuthRouter } from './routes/AuthRouter.js';
import { ServiceRouter } from './routes/ServiceRouter.js';
import { AnimalTypesRouter } from './routes/AnimalTypeRouter.js';
import { BranchRouter } from './routes/BranchRouter.js';
import { BookingRouter } from './routes/BookingRouter.js';
import { EmailRouter } from './routes/EmailRouter.js';
import { swaggerDocs } from './doc/swagger.js';
import './config/config.js';
import './models/index.js';
import { updateBookingDaily } from './services/Sheduler.js';
import { CheckoutRouter } from './routes/CheckoutRouter.js';


const PORT = process.env.PORT || 3000;
const app = express();



app.use(cors());
app.use(express.json({limit: '50mb'}));

app.use("/api/auth", AuthRouter)
app.use('/api/clients', ClientRouter);
app.use('/api/companies', CompanyRouter);
app.use('/api/pets', PetRouter);
app.use("/api/services", ServiceRouter)
app.use("/api/animaltypes", AnimalTypesRouter)
app.use("/api/branches", BranchRouter)
app.use("/api/bookings", BookingRouter)
app.use("/api/emails", EmailRouter)
app.use("/api/checkout", CheckoutRouter)


app.listen( PORT, () =>{
    console.log(`Port runing in port http://localhost:${PORT}`);
    swaggerDocs(app, PORT)
})