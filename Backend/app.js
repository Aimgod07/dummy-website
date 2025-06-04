import express from 'express';
import { config } from 'dotenv';
import dbconnection from './database/mongo.js';
import cors from 'cors';



config({path:"./config/config.env"});
const app = express();

app.use(cors(
    {
        origin: process.env.FRONTEND_URL,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
    }
));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', require('./routes/user.js'));
app.use('/api/v1', require('./routes/product.js'));

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
dbconnection();
export default app;