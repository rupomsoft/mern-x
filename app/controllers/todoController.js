import todos from "../models/todosModel.js";

export const store = async (req, res) => {
    try {
        const { name, description } = req.body;
        await todos.create({ name, description });
        return res.json({ message: 'Item created successfully' });
    } catch (error) {
        return res.json({ error: error.message || 'Internal Server Error' });
    }
};


export const show = async (req, res) => {
    try {
        const todo = await todos.find();
        return res.json({message:"success",result:todo});
    } catch (error) {
        return res.json({ error: error.message || 'Internal Server Error' });
    }
};


export const destroy = async (req, res) => {
    try {
        const { id } = req.params;
        await todos.deleteOne({_id:id});
        return res.json({ message: 'Item deleted successfully' });
    } catch (error) {
        return res.json({ error: error.message || 'Internal Server Error' });
    }
};
