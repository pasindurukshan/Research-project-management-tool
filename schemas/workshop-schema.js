const mongoose = require('mongoose')

const workshopSchema = new mongoose.Schema({
  studentId1: { type: String, required: true, trim: true },
  studentName1: { type: String, required: true, trim: true },
  studentEmail1: { type: String, required: true, trim: true },
  phoneNo1: { type: String, required: true, trim: true },
  

})


module.exports = mongoose.model('workshops', workshopSchema);