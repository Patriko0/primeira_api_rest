import { Router } from 'express';
import UserController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', UserController.index);
router.get('/:id', UserController.show);

router.post('/', UserController.store);
router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);

export default router;

/**
 * index -> Lista todos os usuarios -> GET
 * store/create -> Cria um usuario -> POST
 * delete -> deleta algum usuario -> DELETE
 * show -> mostra um usuario -> GET
 * update -> atualiza um usuario -> PATCH ou PUT
 */
