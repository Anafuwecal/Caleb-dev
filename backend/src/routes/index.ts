import { Router } from 'express';
import contactRoutes from './contactRoutes';
import newsletterRoutes from './newsletterRoutes';

const router = Router();

router.use('/contact', contactRoutes);
router.use('/newsletter', newsletterRoutes);

// Health check
router.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

export default router;