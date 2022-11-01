const Workout = require("../models/workoutModel")

exports.getAllWorkouts = async (req, res) => {
    try{
        const workouts = await Workout.find();
        res.status(200).json({
            status: 'success',
            data:{
                workouts
            }
        })
    }catch (e){
        res.status(400).json({
            status: 'failed'
        })
    }
}

exports.getSingleWorkout = async (req, res) => {
    try{
        const workout = await Workout.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data:{
                workout
            }
        })
    }catch (e){
        res.status(400).json({
            status: 'failed'
        })
    }
}

exports.createWorkout = async(req, res) => {

    const {title, load, reps} = req.body
    let emptyFields = []

    
    try{
        if(!title){
            emptyFields.push('title')
        }
        if(!load){
            emptyFields.push('load')
        }
        if(!reps){
            emptyFields.push('reps')
        }
        if(emptyFields.length > 0 ){
            return res.status(400).json({error: "Please fill in all the fields", emptyFields})
        }_
        const workout = await Workout.create(req.body);
        res.status(200).json({
            status: 'success',
            data:{
                workout
            }
        })
    }catch (e){
        res.status(400).json({
            status: 'failed'
        })
    }
}

exports.updateWorkout = async(req, res) => {
    try{
        const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators:true
        });
        res.status(200).json({
            status: 'success',
            data:{
                workout
            }
        })
    }catch (e){
        res.status(400).json({
            status: 'failed'
        })
    }
}

exports.deleteWorkout = async(req, res)=> {
    try{
        const workout = await Workout.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:"success"
        })
    }catch (e){
        res.status(400).json({
            status: 'delete'
        })
    }
}