const express = require('express')
const connectDB = require('./config/db')
const app = express()
const PORT = process.env.PORT || 5000
const cors = require('cors')
require('dotenv').config()
connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.use('/api/node',require('./Routes/homeRoutes'))

app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
})
