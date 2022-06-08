import ByeController from './../controllers/bye.controller';
import * as expres from 'express';


const router = expres.Router();

router.get('/say-bye', ByeController.sayBye);

export const byeRouter = router;
