import express from 'express';
import { Thought, User } from '../../models/index.js';

const router = express.Router();

router.post('/:thoughtId/reactions', async (req, res) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $push: { reactions: req.body } },
      { new: true }
    );
    res.json(updatedThought);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:thoughtId/reactions/:reactionId', async (req, res) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $pull: { reactions: { _id: req.params.reactionId } } },
      { new: true }
    );
    res.json(updatedThought);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

export default router;
