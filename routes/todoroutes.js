import express from 'express'
import { addTodo, getTodo } from '../controllers/todocontroller.js';
const todorouter = express.Router();


todorouter.post("/add",addTodo)
todorouter.get("/get",getTodo)

export default todorouter;