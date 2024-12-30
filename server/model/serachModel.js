const { mongoose } = require("mongoose");

const searchSchema = mongoose.Schema({
  name: String,
  address: String,
  education: {
    school: String,
    degree: String,
    year: Number,
  },
  contact: {
    phone: String,
    email: String,
    github: String,
    linkedin: String,
  },
  gender: String,
  institution: String,
  age: Number,
  passing: Number,
});

const Search = mongoose.model("internships", searchSchema);

module.exports = Search;
