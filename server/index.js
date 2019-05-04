const path = require('path');
const fs = require('fs');
require('dotenv').config();
const express = require('express');
const multer = require('multer');
var upload = multer({ dest: 'uploads/' })
// const upload = multer({ dest: 'uploads/' })
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const photoRoutes = require("./routes/PhotoRoutes");

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
    app.use(express.static('public'));
    app.use(bodyParser.json());
    app.use(photoRoutes);

    //takes a photo and puts it in a folder called uploads, so you can easily access it later
    // app.post('/profile', upload.single('photo'), function (req, res, next) {

    //     // req.file is the `photo` file
    //     // req.body will hold the text fields, if there were any
    // })
    // app.use(({ dest: './uploads/', 
    //     rename: function(fieldname, filename){
    //         return filename
    //     }
    // }))

    app.get('/api/careportal', function(req, res){
        res.send("You got care portal data")
    });
    // app.post('/donations', upload.single('photo'), function (req, res, next) {
    //     // req.file is the `avatar` file
    //     // req.body will hold the text fields, if there were any
    // })
    // app.use(multer({ dest: './uploads/',
    //     rename: function(fieldname, filename){
    //         return filename
    //     },
    // }));

    app.get('*', function(req, res){
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

