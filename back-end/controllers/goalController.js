// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = (req, res) => {
    res.status(200).json({ "massage": "get goals" })
}

// @desc    Post goals
// @route   POST /api/goals
// @access  Private
const setGoals = (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field');

    }
    res.status(200).json({ "massage": "set goals" })
}

// @desc    Put goals
// @route   PUT /api/goals:id
// @access  Private
const updateGoals = (req, res) => {
    res.status(200).json({ "massage": `Update goal ${req.params.id}` })
}

// @desc    delet goals
// @route   DELET /api/goals:id
// @access  Private
const deletGoals = (req, res) => {
    res.status(200).json({ "massage": `Delete goal ${req.params.id}` })
}



module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deletGoals
}