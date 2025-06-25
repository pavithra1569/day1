const Todo = require('../models/todoModel');
exports.getTodo = async (req, res) => {
    try {
        const todoData = await Todo.find();
        res.status(200).json({ data: todoData });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getTodoById = async (req, res) => {
    try {
        const todoData = await Todo.findById(req.params.id);
        if (!todoData) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.status(200).json({ data: todoData });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.postTodo = async (req, res) => {
    try {
        const { task, status } = req.body;
        const newTodo = new Todo({ task, status });
        await newTodo.save();
        res.status(201).json({ data: newTodo });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.putTodo = async (req, res) => {
    try {
        const update = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!update) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.status(200).json({ data: update });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteTodo = async (req, res) => {
    try {
        const deleteData = await Todo.findByIdAndDelete(req.params.id);
        if (!deleteData) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.status(200).json({ message: "Todo deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
