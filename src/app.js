import { resolve } from 'path';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import homeRoutes from './routes/home';
import alunoRoutes from './routes/aluno';
import userRoutes from './routes/user';
import tokenRoutes from './routes/token';
import fotoRoutes from './routes/foto';

import './database';

const whiteList = [
  `http://localhost:${process.env.APP_PORT}`,
];

const corsOption = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not Allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOption));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, '..', 'uploads')));
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
