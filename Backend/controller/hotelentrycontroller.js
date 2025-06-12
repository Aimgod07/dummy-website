import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import  HotelEntry  from "../models/hotelentryschema.js";
import mongoose from "mongoose";

export const addhotelentry = catchAsyncErrors(async (req, res, next) => {
    console.log(req)
    const { CheckInDate,CheckOutDate,City,Title, Name, Surname, Date, Nationality, Country_code, Phone, Email, others } = req.body;
    
    const hotelEntry = await HotelEntry.insertMany({
        CheckInDate,
        CheckOutDate,
        City,
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
        hotelEntry
    });
}
);



export const getAllHotelEntries = catchAsyncErrors(async (req, res, next) => {
    const hotelEntries = await HotelEntry.find();

    if (!hotelEntries || hotelEntries.length === 0) {
        return next(new ErrorHandler("No hotel entries found", 404));
    }

    res.status(200).json({
        success: true,
        hotelEntries
    });
});

export const getHotelEntryById = catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return next(new ErrorHandler("Invalid hotel entry ID", 400));
    }

    const hotelEntry = await HotelEntry.findById(id);

    if (!hotelEntry) {
        return next(new ErrorHandler("Hotel entry not found", 404));
    }

    res.status(200).json({
        success: true,
        hotelEntry
    });
});


