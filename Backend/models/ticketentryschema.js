import mongoose from "mongoose";


const ticketEntrySchema = new mongoose.Schema({
  ticketId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ticket",
    required: false
  },

  Fromcity:{
    type: String,
    required: true
  }
  ,
  Tocity: {
    type: String,
    required: true
  },
  Date: {
    type: Date,
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

const TicketEntry = mongoose.model("TicketEntry", ticketEntrySchema);
export default TicketEntry;