const asyncHandler =require('express-async-handler')

const Goal = require('../models/goalModel')

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async(req, res) => {
    const goals = await Goal.find()

    res.status(200).json(goals)
})

// @desc    Post goals
// @route   POST /api/goals
// @access  Private
const setGoals = asyncHandler(async(req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text Field');

    }
    const goal = await Goal.create({
        text: req.body.text,
    })

    res.status(200).json(goal)
})

// @desc    Put goals
// @route   PUT /api/goals:id
// @access  Private
const updateGoals = asyncHandler(async(req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findOneAndUpdate(req.params.id,req.body,{
        new:true,
    })

    res.status(200).json(updatedGoal)
})

// @desc    delet goals
// @route   DELET /api/goals:id
// @access  Private
const deletGoals = asyncHandler(async(req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    await goal.remove()

    res.status(200).json({ id: req.params.id  })
})



module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deletGoals
}