/*
    申请模型
*/
const mongoose = require('mongoose')
const applySchema = new mongoose.Schema({
      _id: {
        type: Number,
        required: true
      },
      companyName: {
        type: String,
        required: true
      },
      applyUserName: {
        type: String,
        required: true
      },
      triedExpireDate: {
        type: Date,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      scanLimits: {
        type: Number,
        required: true
      },
      scanThreadLimits: {
        type: Number,
        required: true
      },
      handWareID: {
        type: String,
        required: true
      },
      memo: {
        type: String,
        required: false
      }
});
module.exports = mongoose.model('Apply', applySchema);