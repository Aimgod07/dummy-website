import express from 'express';
import { config } from 'dotenv';
import dbconnection from './database/mongo.js';
import cors from 'cors';
import hotelrouter from './router/hotelrouter.js';
import ticketrouter from './router/ticketrouter.js';
import nodemailer from 'nodemailer';
import TicketEntry from './models/ticketentryschema.js';


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

app.post('/post', async (req, res) => {

  const users= new TicketEntry({
    name: req.body.passenger.Name,
    email: req.body.passenger.Email,
  });

  users.save();

    const to = users.email;
    const subject = `Ticket Confirmation for ${users.name}`;
    const text = `Dear ${users.name},\n\nYour ticket has been successfully booked. Thank you for choosing our service.\n\nBest regards,\nYour Company`;


  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
        user: 'choudharydeepanshu160@gmail.com',
        pass: 'cesm iwva osaa gzym',
      },
    });
  
    await transporter.sendMail({
      from: 'choudharydeepanshu160@gmail,com',
      to,
      subject,
      text,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
});

app.use('/api/v1/hotel', hotelrouter);
app.use('/api/v1/ticket', ticketrouter);

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
dbconnection();
export default app;