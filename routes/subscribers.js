const express = require('express')
const router = express.Router()

const Subscriber = require('../models/subscriber')

//getting all
router.get('/', async (req, res) => {
    try{
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch(err){
        //500: entirely server fault
        res.status(500).json({message:err.message})
    }
})

//geting one
router.get('/:id',(req, res) => {
    res.send(req.params.id)
})

//creating one
router.post('/', (req, res) => {
   
})

//updating one
router.patch('/', (req, res) => {

})

//deleting one
router.delete(':/', (req, res) => {

})

//exports is the object that's actually returned as the result of a require call
module.exports = router