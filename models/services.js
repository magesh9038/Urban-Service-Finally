let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let ServicesSchema = new mongoose.Schema({
  services: {
    type: String,
  },
  Types: {
    type: String,
  },
  description: {
    type: String,
  },
  Image: {
    type: String,
  },
  About: {
    type: String,
  }
});
module.exports = Service = mongoose.model("Services", ServicesSchema);
