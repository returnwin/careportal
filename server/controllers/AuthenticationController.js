const User = require("../models/UserModel");
const jwt = require("jwt-simple");

function authentication(request, response,next) {
  // console.log("RESPONSE:", response)
  if(request.path.split("/")[1] !== "api")
  {
    return next();
  }
  // get the token from the header
  const tokenString = request.header("authorization");
  console.log("tokenString:", tokenString)
  if (!tokenString) {
    console.log("NOT TOKEN STRING")
    return response.send("Invalid credentials");
  }
  const tokenObject = jwt.decode(tokenString,process.env.SECRET);
  // decrypt the token
  // find user by id
  User.findById(tokenObject.userId, function (err, user) {
    if (err) { return response.send("Error"); }
    if (user) {
      request.user = user;
      return next();
    } 
    console.log("USER BAD!!")
    return response.send("Invalid credentials");
  });
}

exports.authentication = authentication;