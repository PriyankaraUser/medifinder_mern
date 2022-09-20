const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 9000;

const DB_URL = 'mongodb+srv://psw:19971001@mernmedifinder.omruui3.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(DB_URL)
.then(() => {
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error', err));

app.listen(PORT, ()=>{
    console.log('App is running on ${PORT}');
})