const mongoose = require("mongoose")

const registrations = new mongoose.Schema( {
    name : { type : String },
    enrollmentNo : { type : String },
    department : { type : String },
    email : { type : String }
} )

const Schema = new mongoose.Schema(
    {
        eventName : {
            type : String
        },
        createBy : {
            type : String
        },
        eventDate : {
            type : String
        },
        department : {
            type : String
        },
        Registrations : [ registrations ]
    }
)
const EVENTS = mongoose.model( "events" , Schema )

module.exports = { EVENTS }
