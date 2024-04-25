import mongoose, { Schema } from 'mongoose';
import formatDate from './getters/formatDate.js';

export const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    defaultValue: new mongoose.Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now, get: formatDate },
});
