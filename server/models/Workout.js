import mongoose from 'mongoose';

const WorkoutSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        workoutName: {
            type: String,
            required: true,
            unique: true,
        },
        sets: {
            type: Number
        },
        reps: {
            type: String,
            default: null,
        },
        weight: {
            type: Number,
        },
        duration: {
            type: Number,
        },
        caloriesBurned: {
            type: Number,
        },
        date: {
            type: Date,
            default: Date.now,
        },

    },
    { timestamp: true }
);

export default mongoose.model('Workout', WorkoutSchema);