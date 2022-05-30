const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const ejs = require('ejs');

const staffRoutes = require('./routes/staffRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.static("public")); //This lines means the static data like css, images... are in the public directory

app.use(express.json());
app.use('/api/v1/user', staffRoutes);

const connectionString = process.env['MONGO_DB'];

//fix the error and use the env variable connectionstring
mongoose.connect("mongodb+srv://AFassignment:AFassignment@cluster0.waj6y.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    })
}).catch(err => {
    console.log(err);
})