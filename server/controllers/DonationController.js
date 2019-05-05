const DonationModel = require("../models/DonationModel");
const fs = require('fs');
const express = require('express');
const router = express.Router();
// const imgPath = '/uploads/yourimage.png';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


module.exports.list = (req, res)=>{
    DonationModel.find({}).exec().then((donations)=>{
        return res.json(donations)
    })
}

module.exports.show = (req, res)=>{
    DonationModel.findById(req.params.id).exec().then((donation)=>{
        return res.json(donation)
    })
}

module.exports.create = (req, res)=>{
    const imgPath = './uploads';
    // console.log("REQ.BODY", req)
    const d = new DonationModel({
        userId: req.body.userId,
        name: req.body.name,
        location: req.body.location,
        date: new Date(),
        itemType: req.body.itemType,
        itemTitle: req.body.itemTitle,
        itemDesc: req.body.itemDesc,
    });
    d.save().then(savedDonation =>{
        return res.json(savedDonation)
    })
    // d.img.data = fs.readFileSync(imgPath);
    // d.img.contentType = 'jpg';
    

    // d.save(function(err, d) {
    //     if (err) return console.error(err);
    //     console.log("donationImage:", d)
    //     console.dir(d);
    // })
    // DonationModel.find({}, function(err,donationImage){
    //     res.render('index',{ donationImage: donationImage });
    // });
}


module.exports.update = (req, res)=>{
    DonationModel.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        {new: true},
        (err, donationUpdate)=>{
            if(err) return res.status(500).send(err);
            return res.send(donationUpdate)
        }
    )
}

module.exports.remove = (req, res)=>{
    DonationModel.findByIdAndRemove(req.params.id, (err, donation)=>{
        if(err) return res.status(500).send(err)

        //creating a simple object to send back with a message and the id of the document that was removed
        const response = {
            message: "Donation successfully deleted",
            id: donation._id
        }
        return res.status(200).send(response);
    });
}