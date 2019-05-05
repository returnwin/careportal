const path = require('path');
const fs = require('fs');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require("./routes/UserRoutes");
const sessionRoutes = require("./routes/SessionRoutes");
const authenticationRoutes = require("./routes/AuthenticationRoutes");
const donationRoutes = require("./routes/DonationRoutes");
const DonationModel = require('./models/DonationModel');


mongoose.set('debug', true);
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODBURI).then(
    () => {
        console.log('mongoose connected :)');
        startWebServer();
    },
    err => {
        console.log('mongoose did not connect :(', err);
    }
);

const startWebServer = () =>{
    //not secure
    const app = express();
    
    app.get("/api/publicinformation", function (req, res) {
        res.send("Anyone can see this");
    });

    app.use(bodyParser.json());
    app.use(userRoutes);
    app.use(sessionRoutes);
    app.use(authenticationRoutes);
    app.use(donationRoutes);
//     const multer = require("multer");
// const cloudinary = require("cloudinary");
// const cloudinaryStorage = require("multer-storage-cloudinary");

// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.API_KEY,
//     api_secret: process.env.API_SECRET
// });

// const storage = cloudinaryStorage({
//     cloudinary: cloudinary,
//     folder: "demo",
//     allowedFormats: ["jpg", "png"],
//     transformation: [{ width: 500, height: 500, crop: "limit" }]
// });

// const parser = multer({ storage: storage });

// app.post('/api/images', parser.single("image"), (req, res) => {
//     console.log(req.file) // to see what is returned to you
//     const image = {};
//     image.url = req.file.url;
//     image.id = req.file.public_id;
//     DonationModel.create(image) // save image information in database
//       .then(newImage => res.json(newImage))
//       .catch(err => console.log(err));
// });


   //secure
    app.get("/api/canigetthis", function (req, res) {
        res.send("You got the data. You are authenticated");
      });

    app.get('/api/careportal', function(req, res){
        res.send("You got care portal data")
    });

    
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname + '/public/index.html'));
    });

    const port = process.env.PORT || 3002;
    app.listen(port, (err) => {
        if (err) {
            return console.log('ERROR: ', err)
        }
        console.log(`Listening on port: ${port}`)
    });
}

