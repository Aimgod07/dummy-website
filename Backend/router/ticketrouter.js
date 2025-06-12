import express from 'express';
import { addTicketEntry, getAllTicketEntries, getTicketEntryById } from '../controller/ticketentrycontroller.js';
import { get } from 'mongoose';
import cors from 'cors';
import nodemailer from 'nodemailer';
 


const router = express.Router();

router.post('/add',addTicketEntry);
router.get('/get', getAllTicketEntries);
router.get('/get/:id', getTicketEntryById)




export default router;