import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    title: { type: String, unique: true, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        'Please provide a valid email address',
      ],
    },
    thoughts: [{ _id: Number }],
    friends: [{ _id: Number }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = mongoose.model('User', userSchema);

// User.create({
//   title: 'test title',
//   email: 'asdf@gmail.com',
//   thoughts: [{ _id: 1 }, { _id: 2 }, { _id: 3 }],
//   friends: [{ _id: 1 }, { _id: 2 }, { _id: 3 }],
// }).then((data) => console.log(data));

export default User;
