import { helloRouter } from './hello.route';
import { byeRouter } from './bye.route';

import * as express from 'express';

const routes = express.Router();

routes.use('/bye', byeRouter);
routes.use('/hi', helloRouter);

export const allRouters = routes;