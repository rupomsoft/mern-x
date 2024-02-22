import express from 'express';
const router = express.Router();
import * as todoController from '../app/controllers/todoController.js';

router.post('/store', todoController.store);
router.get('/show', todoController.show);
router.delete('/destroy/:id', todoController.destroy);

export default router;