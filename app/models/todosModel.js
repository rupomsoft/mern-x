import mongoose from 'mongoose';
const todosSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true }
    },
    { timestamps: true, versionKey: false }
);

const todos = mongoose.model('todos', todosSchema);

export default todos;
