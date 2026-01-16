import { Router } from 'express';
import { subscribeToNewsletter } from '../controllers/newsletterController';

const router = Router();

router.post('/', subscribeToNewsletter);

export default router;