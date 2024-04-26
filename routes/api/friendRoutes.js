import express from 'express';
import { Thought, User } from '../../models/index.js';

const router = express.Router();

router.put('/:userId/friends/:friendId', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      { $push: { friends: req.params.friendId } },
      { new: true }
    );
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:userId/friends/:friendId', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      { $pull: { friends: req.params.friendId } },
      { new: true }
    );
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
