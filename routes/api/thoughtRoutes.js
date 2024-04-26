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

router.get('/:id', async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id);
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const { thoughtText, username } = req.body;

    const user = await User.findOne({ username });

    const newThought = await Thought.create({ thoughtText, username });
    const updatedUser = await User.findByIdAndUpdate(user._id.toString(), {
      $push: { thoughts: newThought._id.toString() },
    });
    res.json(newThought);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedThought);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
