const PhotoModel = require("../models/PhotoModel");

// module.exports.create = (req, res)=>{
//     const s = new StudentModel({
//         userId: req.body.userId,
//         name: req.body.name,
//         gradelevel: req.body.gradelevel,
//         subject: req.body.subject,
//         score: req.body.score
//     });
//     s.save().then(savedStudent =>{
//         return res.json(savedStudent)
//     })
// }

module.exports.create = (req, res)=>{
    const newPhoto = new PhotoModel();
    newPhoto.img.data = fs.readFileSync(req.files.userPhoto.path)
    newPhoto.img.contentType = 'image/png';
    newPhoto.save();
}