// @desc    Get all heroes
// @route   GET /api/heroes
// @access  Public
/* exports.getheroes = async (req, res, next) => {
    try {
        const heroes = await Transaction.find();

        return res.status(200).json({
        success: true,
        count: heroes.length,
        data: heroes
        });
    } catch (err) {
        return res.status(500).json({
        success: false,
        error: 'Server Error'
        });
    }
} */

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