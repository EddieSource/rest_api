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
router.get('/:id',getSubscriber, (req, res) => {
    //res.json gives json object, res.send gives text HTML  product
    res.send(res.subscriber.name)
})

//creating one
router.post('/', (req, res) => {
   const subscriber = new Subscriber({
       name: req.body.name, 
       subscribedToChannel: req.body.subscribedToChannel
   })

   try{
        const newSubscriber = await subscriber.save()
        //successfully create a project
        res.status(201).json(newSubscriber)
   } catch (err) {
       //will fail if user gives bad data
        res.status(400)
   }
})

//updating one
router.patch('/:id', getSubscriber, async (req, res) => {
    if (req.body.name != null){
        res.susbcriber.name = req.body.name
    }
    if(req.body.subscribedToChannel != null){
        res.subscriber.subscribedToChannel = req.body.subscribedToChannel
    }
    try{
        const updateSubscriber = await res.subscriber.save()
        res.json(updateSubscriber)
    }
    catch(err){
        res.status(400)
    }
})

//deleting one
router.delete('/:id', getSubscriber, async (req, res) => {
    try{
        await res.subscriber.remove()
        res.json({message:'deleted subscriber'})

    } catch(err){
        res.status(500).json({message:err.message})
    }
})

async function getSubscriber(req, res, next){
    try{
        subscriber = await Subscriber.findByID(req.params.id)
        if(subscriber == null){
            return res.status(404).json({message:'cannot find subscriber'})
        }
    }
    catch(err){
        return res.status(500).json({ message: err.message})
    }
    //for other routing function can just call res.subscriber
    res.subscriber = subscriber
    next()
}

//exports is the object that's actually returned as the result of a require call
module.exports = router