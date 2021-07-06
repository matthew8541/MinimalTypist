const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Mongoose plugin that simplifies building username and password login with Passport.
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  }
});

//Passport-Local Mongoose will add a username, hash and salt field to store the username, the hashed password and the salt value
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);