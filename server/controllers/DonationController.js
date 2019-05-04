const DonationModel = require("../models/DonationModel");

module.exports.list = (req, res)=>{
    DonationModel.find({ userId: req.user._id }).exec().then((students)=>{
        return res.json(students)
    })
}

module.exports.getUserDonations = (req, res) => {
    DontainModel.find({
        userId: req.params.userId
    })
    .exec()
    .then(donations => {
        return res.json(donations);
    });
}

module.exports.show = (req, res)=>{
    DonationModel.findById(req.params.id).exec().then((donation)=>{
        return res.json(donation)
    })
}

module.exports.create = (req, res)=>{
    const d = new DonationModel({
        userId: req.body.userId,
        name: req.body.name,
        location: req.body.location,
        date: new Date(),
        itemType: req.body.itemType,
        itemTitle: req.body.itemTitle,
        itemDesc: req.body.itemDesc,
        image: req.body.image
    });
    d.save().then(savedDonation =>{
        return res.json(savedDonation)
    })
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