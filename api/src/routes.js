import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ContactController from './app/controllers/ContactController';

import authMiddleware from './app/Middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/user', UserController.store);
routes.post('/sessions', SessionController.store);

routes.post('/contacts', ContactController.store);

routes.use(authMiddleware);

routes.get('/user', UserController.index);
routes.put('/user', UserController.update);

routes.get('/files', FileController.index);
routes.post('/files', upload.single('file'), FileController.store);

routes.get('/contacts', ContactController.index);

export default routes;
