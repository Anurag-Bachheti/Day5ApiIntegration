const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());



app.use('/users', userRoutes)


app.listen(process.env.PORT || 5000, ()=> {
    console.log("Listening to PORT: ", process.env.PORT || 5000)
})