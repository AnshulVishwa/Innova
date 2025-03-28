const express = require("express")
const { handleAddEvent, handleGetAllEvents } = require("../Controller/event")
const EventRoute = express.Router()

EventRoute.post( "/add" , handleAddEvent )
EventRoute.get( "/get" , handleGetAllEvents )
EventRoute.get( "/get/:specificEvent" )

module.exports = {
    EventRoute
}
