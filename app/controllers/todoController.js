import todos from "../models/todosModel.js";
import QueryBuilder from "../utility/queryBuilderUtility.js";

export const store = async (req, res) => {
  try {
    const { name, description } = req.body;
    await todos.create({ name, description });
    return res.json({ message: "Item created successfully" });
  } catch (error) {
    return res.json({ error: error.message || "Internal Server Error" });
  }
};

export const show = async (req, res) => {
  try {
    const todo = await todos.find();
    return res.json({ message: "success", result: todo });
  } catch (error) {
    return res.json({ error: error.message || "Internal Server Error" });
  }
};

export const showAll = async (req, res) => {
  try {
    const query = req.query;
    new QueryBuilder(todos.find());
    const todosQuery = new QueryBuilder(todos.find(), query)
      .search(["name", "description"])
      .filter()
      .sort()
      .paginate()
      .fields();
    const todo = await todosQuery.modelQuery;
    const meta = await todosQuery.countTotal();
    return res.json({ message: "success", result: todo, meta });
  } catch (error) {
    return res.json({ error: error.message || "Internal Server Error" });
  }
};

export const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    await todos.deleteOne({ _id: id });
    return res.json({ message: "Item deleted successfully" });
  } catch (error) {
    return res.json({ error: error.message || "Internal Server Error" });
  }
};
