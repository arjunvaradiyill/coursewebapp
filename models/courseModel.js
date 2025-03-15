import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 30,
            unique: true,
        },
        description: {
            type: String,
            required: true,
            minLength: 20,
            maxLength: 300,
        },
        price: {
            type: Number,
            required: true,
        },
        syllabus: {
            type: String,
        },
        demoVideos: {
            type: String,
        },
        duration: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaLGtEd0MJro4X9wDmT2vrvLT-HjKkyyWVmg&s",
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        mentor: { type: mongoose.Types.ObjectId, ref: "Mentor" },
    },
    { timestamps: true }
);

export const Course = mongoose.model("Course", courseSchema);