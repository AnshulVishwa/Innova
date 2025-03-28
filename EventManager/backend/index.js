const express = require("express")
const { Connect_MongoDB } = require("./MongoDB/connection")
const app = express()
const PORT = 5000

app.use( express.json() )
app.use( express.urlencoded( { extended : false } ) )
Connect_MongoDB()

app.get( "/" , ( req , res ) => {
    res.send("Hello User")
} )

app.listen( PORT , () => console.log(`Server Started at http://localhost:${PORT}`) )
