import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = new Router();

router.post('/', UserController.store);

export default router;

/**
 * index -> Lista todos os usuarios -> GET
 * store/create -> Cria um usuario -> POST
 * delete -> deleta algum usuario -> DELETE
 * show -> mostra um usuario -> GET
 * update -> atualiza um usuario -> PATCH ou PUT
 */
