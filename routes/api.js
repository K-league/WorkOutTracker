const router = require('express').Router();
const Workout = require('../models/workout.js');
//post route put and get(2) and a delete
router.post('/api/workouts', (res, req) => {
    Workout.create({})
    .then((dbWorkout)=> {
        res.json(dbWorkout)
    })
    .catch((err) => {
        res.json(err)
    })
})