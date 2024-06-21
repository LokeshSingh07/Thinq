import mongoose from "mongoose";


const TodoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,       // referance of another model
        ref: "User",            
    },
    subTodo: [{                                     // Array of SubTodo
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo"
    }],


}, {timestamps: true});

export const Todo = mongoose.model("Todo", TodoSchema);