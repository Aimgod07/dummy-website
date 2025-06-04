import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import  ErrorHandler  from "../middlewares/error.js";
import TicketEntry  from "../models/ticketentryschema.js";
import mongoose from "mongoose";


export const addTicketEntry = catchAsyncErrors(async (req, res, next) => {
    const { Fromcity,Tocity,Title,Name, Surname, Date, Nationality, Country_code, Phone, Email ,others} = req.body;
    const ticketEntry = await TicketEntry.create({
        Fromcity,
        Tocity,
        Title,
        Name,
        Surname,
        Date,
        Nationality,
        Country_code,
        Phone,
        Email,
        others
    });
    res.status(201).json({
        success: true,
        ticketEntry
    });
}
);



export const getAllTicketEntries = catchAsyncErrors(async (req, res, next) => {
    const ticketEntries = await TicketEntry.find();

    if (!ticketEntries || ticketEntries.length === 0) {
        return next(new ErrorHandler("No ticket entries found", 404));
    }

    res.status(200).json({
        success: true,
        ticketEntries
    });
});
export const getTicketEntryById = catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return next(new ErrorHandler("Invalid ticket entry ID", 400));
    }

    const ticketEntry = await TicketEntry.findById(id);

    if (!ticketEntry) {
        return next(new ErrorHandler("Ticket entry not found", 404));
    }

    res.status(200).json({
        success: true,
        ticketEntry
    });
});


