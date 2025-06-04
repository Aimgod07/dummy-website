import express from 'express';
import { addTicketEntry } from '../controller/ticketentrycontroller.js';
 


const router = express.Router();

router.post('/add',addTicketEntry);


export default router;