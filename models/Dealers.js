let mongoose = require("mongoose");
let DealerSchema = new mongoose.Schema({
  Name: {
    type: String,
    
  },
  ServiceTypes: {
    type: String,
    

  },
  MobileNo: {
    type: Number,
    
  },
  AadharNo: {
    type: Number,
    
  },
  Address: {
    type: String,
    
  },
  PermanentAddress: {
    type: String,
    
  },
  EmailId: {
    type: String,
    
  },
  Password: {
    type: String,
    
  },
  loc: {
    lat: {
      type: String
    },
    long: {
      type: String
    }
  }
});
module.exports = User = mongoose.model("dealers", DealerSchema);
