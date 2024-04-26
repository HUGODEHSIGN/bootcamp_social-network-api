import express from 'express';
import { Thought, User } from '../../models/index.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;