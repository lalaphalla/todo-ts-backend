import { Router } from 'express';
import { createTodo, deleteTodo, getAllTodo, updateTodo } from '../controllers/todo';

const router = Router();

router.post('/', createTodo);

router.get('/', getAllTodo);

router.delete('/:id', deleteTodo);

router.patch('/:id', updateTodo);


export default router;
