/*
    管理员模型
*/
const mongoose = require('mongoose')
const basicReposity = require('../utils/entityReposity')
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
class entUser extends basicReposity{
  constructor(){
    super();
    this.monogo_collection = "User";
  }
}
module.exports = entUser;