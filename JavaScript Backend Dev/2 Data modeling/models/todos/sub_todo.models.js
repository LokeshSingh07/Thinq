const mongoose = require("mongoose");


const SubTodoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

},{timestamps: true});

export const SubTodo = mongoose.model("SubTodo", SubTodoSchema);