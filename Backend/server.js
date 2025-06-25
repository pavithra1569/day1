const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db');
const cors = require('cors')
const router = require('./routers/egrouter');
const todoRouter =require('./routers/todoRouters')
dotenv.config();

const app = express();
app.use(cors())
const PORT = process.env.PORT;
connectDB();
app.use(express.json())
app.use(router)
app.use('/todo',todoRouter)
app.listen(PORT,()=>{
    console.log(`server running on port http://localhost:${PORT}`);
})