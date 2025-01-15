import { Router } from 'express';
import { createTodo, deleteTodo, getAllTodo } from '../controllers/todo';

const router = Router();

router.post('/', createTodo);

router.get('/', getAllTodo);

router.delete('/:id', deleteTodo);

// router.patch('/:id');


export default router;
