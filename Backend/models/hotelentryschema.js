import mongoose from "mongoose";

const hotelEntrySchema = new mongoose.Schema({

    hotelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hotel",
        required: true
    },
    
     CheckInDate: {
        type: Date,
        required: true
    },

    CheckOutDate: {
        type: Date,
        required: true
    },

    GuestName: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    },

    
  Title: {
    type: String,
    required: true,
    enum: ["Mr", "Mrs", "Miss", "Ms", "Dr"]
  },
  
  Name: {
    type: String,
    required: true
  },

  Surname: {
    type: String,
    required: true  
  },

   Date: {
    type: Date,
    required: true  
  },

  Nationality: {
    type: String,
    required: true
  },

  Country_code:{
    type: String,
    required: true,
  },

  Phone: {
    type: Number,
    required: true,
    match: [/^\+?[\d\s-]{10,}$/, 'Please use a valid phone number']
  },

  Email: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
  },
  
  others: {
    type: String,
    required: true,
    enum: ["Visa Validation", "Proof of Return", "Extention of Visa",  "Proof of Travel", "Other"]
  }



});

const HotelEntry = mongoose.model("HotelEntry", hotelEntrySchema);
export default HotelEntry;
