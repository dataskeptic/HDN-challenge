const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const heroes = require('./routes/heroes');


dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

app.use(express.json());


app.use('/api/heroes', heroes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))