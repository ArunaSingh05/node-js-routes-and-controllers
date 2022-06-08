import * as expres from 'express';

import HelloController from './../controllers/hello.controller';

const router = expres.Router();

router.get('/say-hello', HelloController.sayHello);

export const helloRouter = router;