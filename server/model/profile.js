const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  record: [{
    wpn: { type: Number },
    accuracy: { type: Number },
    date: { type: String }
  }]
});

module.exports = mongoose.model("Profile", ProfileSchema);