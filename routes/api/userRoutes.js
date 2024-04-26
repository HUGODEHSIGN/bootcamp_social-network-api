import express from 'express';
import { Thought, User } from '../../models/index.js';
import friendRoutes from './friendRoutes.js';

const router = express.Router();

router.use('/', friendRoutes);

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    const userThoughts = user.thoughts;

    userThoughts.forEach(async (thought) => {
      await Thought.findByIdAndDelete(thought.toString());
    });

    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
