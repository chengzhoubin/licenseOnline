/*
    管理员模型
*/
const mongoose = require('mongoose')
const applySchema = new mongoose.Schema({
      _id: {
        type: Number,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      canAuditDuration: {
        type: Number,
        required: true
      }
});
module.exports = mongoose.model('Apply', applySchema);