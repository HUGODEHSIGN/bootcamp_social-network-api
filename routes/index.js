import express from 'express';
const router = express.Router();

import apiRoutes from './api/index.js';

router.use('/api', apiRoutes);

router.use((req, res) => res.send('This server only supports api routes.'));

export default router;
