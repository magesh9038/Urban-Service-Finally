let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let UserSchema = new mongoose.Schema({

  EmailId: {
    type: String
  },
  MobileNo: {
    type: String
  },

  Pincode: {
    type: Number
  },
  Password: {
    type: String
  },
  Worker: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      Date: {
        type: Date,
        default: Date.now
      },
      Status: {
        type: String
      },
      Address: {
        type: String,
        required: true,
      },
      loc: {
        lat: {
          type: String
        },
        long: {
          type: String
        }
      },
      dealer_details: Schema.Types.Mixed,
      ServiceTypes: {
        type: String,
      },
    },
  ],
});
module.exports = User = mongoose.model("users", UserSchema);
