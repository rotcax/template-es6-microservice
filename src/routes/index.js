import { Router } from 'express';
import { testService } from '../services';

const router = Router();

router.get('/', testService.test);

export default router;
