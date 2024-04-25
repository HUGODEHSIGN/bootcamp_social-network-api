import connection from '../config/connection.js';
import Thought from '../models/Thought.js';
import User from '../models/User.js';
import { thoughtData, userData } from './seedData.js';

function seedData() {
  connection
    .dropDatabase()
    .then(() => {
      console.log('db has been dropped');
    })
    .then(async () => {
      // seed users
      const userResult = await User.insertMany(userData);
      // seed thoughts
      const thoughtResult = await Thought.insertMany(thoughtData);
    });
}

seedData();
