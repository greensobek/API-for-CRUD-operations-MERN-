const express = require('express')
const router = express.Router()

const {getGoals,setGoals,updateGoals,deletGoals} =require('../controllers/goalController')

// router.get('/',getGoals)

// router.post('/',setGoals)

// router.put('/:id',updateGoals)

// router.delete('/:id',deletGoals)
//insted of up this

router.route('/').get(getGoals).post(setGoals)
router.route('/:id').delete(deletGoals).put(updateGoals)

module.exports = router