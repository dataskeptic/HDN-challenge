const mongoose = require('mongoose');

const HeroesSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Please add some text']
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'Please add some text']
  },
  powers: {
    type: [String],
    trim: true,
    required: [true, 'Please add some text']
  }
});

module.exports = mongoose.model('Heroes', HeroesSchema);