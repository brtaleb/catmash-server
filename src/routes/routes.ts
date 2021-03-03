import {Router} from 'express';
import * as catController from '../controllers/catController';

const router = Router();

router.use((req, res, next) => {
    if (
        ['POST', 'PUT', 'PATCH'].indexOf(req.method) !== -1 &&
        !req.is('json')
    ) {
        return res.status(415).send('Content-Type must be application/json');
    }

    return next();
});

router.get('/', catController.getCats);

router.post('/vote', catController.postVote);

export default router;



