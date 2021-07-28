// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
/* exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
        success: true,
        count: transactions.length,
        data: transactions
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