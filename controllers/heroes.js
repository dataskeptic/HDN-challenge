const Heroes = require('../models/Heroes');

// @desc    Get all heroes
// @route   GET /api/heroes
// @access  Public
exports.getHeroes = async (req, res, next) => {
    res.send('Get heroes')    
}

// @desc    Add hero
// @route   POST /api/heroes
// @access  Public
exports.addHero = async (req, res, next) => {
    res.send('add hero');
  }
  
  // @desc    Delete hero
  // @route   DELETE /api/heroes/:id
  // @access  Public
  exports.deleteHero = async (req, res, next) => {
    res.send('Delete hero');
  }