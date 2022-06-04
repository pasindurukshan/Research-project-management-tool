const mongoose = require('mongoose')

const requestSupervisorSchema = new mongoose.Schema({
  studentId1: { type: String, required: true, trim: true },
  studentName1: { type: String, required: true, trim: true },
  studentEmail1: { type: String, required: true, trim: true },
  phoneNo1: { type: String, required: true, trim: true },

  reseachTopic: { type: String, required: true, trim: true },
  reseachFeild: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  staus:{ type: String,  trim: true },
})


module.exports = mongoose.model('requestSupervisor', requestSupervisorSchema);

