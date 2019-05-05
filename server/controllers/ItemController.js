const ItemModel = require("../models/ItemModel");

module.exports.list = (req, res)=>{
    ItemModel.find({}).exec().then((donationItems)=>{
        return res.json(donationItems)
    })
}

module.exports.show = (req, res)=>{
    ItemModel.findById(req.params.id).exec().then((donationItem)=>{
        return res.json(donationItem)
    })
}

module.exports.create = (req, res)=>{
    const item = new DonationModel({
        // userId: req.body.userId,
        name: req.body.name,
        location: req.body.location,
        date: new Date(),
        itemType: req.body.itemType,
        itemTitle: req.body.itemTitle,
        itemDesc: req.body.itemDesc,
    });
    item.save().then(savedItem =>{
        console.log("savedDonation:", savedItem)
        return res.json(savedItem)
    })
}

// module.exports.update = (req, res)=>{
//     DonationModel.findByIdAndUpdate(
//         req.params.id, 
//         req.body, 
//         {new: true},
//         (err, donationUpdate)=>{
//             if(err) return res.status(500).send(err);
//             return res.send(donationUpdate)
//         }
//     )
// }

// module.exports.remove = (req, res)=>{
//     DonationModel.findByIdAndRemove(req.params.id, (err, donation)=>{
//         if(err) return res.status(500).send(err)

//         //creating a simple object to send back with a message and the id of the document that was removed
//         const response = {
//             message: "Donation successfully deleted",
//             id: donation._id
//         }
//         return res.status(200).send(response);
//     });
// }