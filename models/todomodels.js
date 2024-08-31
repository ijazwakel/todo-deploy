import mongoose, { Schema } from "mongoose";

// Define the schema
const todoSchema = new Schema({
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

// Create the model
export const TodoModel = mongoose.model("Todo", todoSchema);
