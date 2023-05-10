import dotenv from 'dotenv';
import express from 'express';
import { resolve } from 'path';

import homeRoutes from './src/routes/home';
import alunoRoutes from './src/routes/aluno';
import userRoutes from './src/routes/user';
import tokenRoutes from './src/routes/token';
import fotoRoutes from './src/routes/foto';

import './src/database';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

export default new App().app;
