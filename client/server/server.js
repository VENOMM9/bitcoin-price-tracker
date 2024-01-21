const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const priceRouter = require('./routes/price')
const { connectionToMongodb } = require("./db/connect");



require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5500;



app.use(cors());

app.use("/", priceRouter);

connectionToMongodb()




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
