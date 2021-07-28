const Heroes = require('../models/Heroes');

// @desc    Get all heroes
// @route   GET /api/heroes
// @access  Public
exports.getHeroes = async (req, res, next) => {
  try {
    const heroes = await Heroes.find();

    return res.status(200).json({
      success: true,
      count: heroes.length,
      data: heroes,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    Add hero
// @route   POST /api/heroes
// @access  Public
exports.addHero = async (req, res, next) => {
    try {
        const { name, description, powers } = req.body;
    
        const heroes = await Heroes.create(req.body);
      
        return res.status(201).json({
          success: true,
          data: heroes
        }); 
      } catch (err) {
        if(err.name === 'ValidationError') {
          const messages = Object.values(err.errors).map(val => val.message);
    
          return res.status(400).json({
            success: false,
            error: messages
          });
        } else {
          return res.status(500).json({
            success: false,
            error: 'Server Error'
          });   
        }
      }
  }
  
  // @desc    Delete hero
  // @route   DELETE /api/heroes/:id
  // @access  Public
  exports.deleteHero = async (req, res, next) => {
    try {
        const heroes = await Heroes.findById(req.params.id);
    
        if(!heroes) {
          return res.status(404).json({
            success: false,
            error: 'No heroes found'
          });
        }
    
        await heroes.remove();
    
        return res.status(200).json({
          success: true,
          data: {}
        });
    
      } catch (err) {
        return res.status(500).json({
          success: false,
          error: 'Server Error'
        });
      }
  }