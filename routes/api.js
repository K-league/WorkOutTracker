const router = require('express').Router();
const { db } = require('../models/workout.js');
const Workout = require('../models/workout.js');
//post
router.post('/api/workouts', (req , res) => {
    //create new workout
    console.log(req.body)
    Workout.create(req.body)
    .then((dbWorkout)=> {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err);
    });
});
//PUT add new exercises to plan
router.put('/api/workouts/:id', (req, res) => {
    const workoutId = req.params.id;
    Workout.updateOne(
        { _id: workoutId }, 
        { $push: { exercises: req.body } },
        function (error, success) {
            if (error) {
                res.status(400);
                res.json(error);
            } else {
                res.json(success);
            }
        }
    );
});

//GET the combined weight of multiple exercises from the past seven workouts on the stats page
router.get('/api/workouts', (req, res) => {
    //one GET route with SWITCH statments
    Workout.find(stats)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
})
// //GET the total duration of each workout from the past seven workouts on the stats page
// router.get('/api/workouts', (req, res) => {
//     //find duration
//     Workout.find(stats)
//     .then(dbWorkout => {
//         res.json(dbWorkout);
//     })
//     .catch(err => {
//         res.json(err);
//     });
// })
//delete
router.delete('api/workouts', (req, res) => {
    Workout.find(stats)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
})
module.exports = router;