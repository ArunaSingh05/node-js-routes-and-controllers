import { allRouters } from './routes/index';
import * as express from 'express';

const app = express();

app.use(allRouters)

app.listen(4000);