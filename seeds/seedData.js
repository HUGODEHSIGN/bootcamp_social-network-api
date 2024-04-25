export const thoughtData = [
  {
    _id: '60fcf22d56e431001f58f43c',
    thoughtText: 'I love hiking in the mountains!',
    username: 'JohnDoe',
    reactions: [
      {
        reactionBody: 'Me too! The views are amazing.',
        username: 'naturelover',
      },
      {
        reactionBody: 'I prefer the beach, but mountains are cool too.',
        username: 'beachbum',
      },
    ],
  },
  {
    _id: '60fcf22d56e431001f58f43d',
    thoughtText: 'Just finished reading a great book!',
    username: 'JohnDoe',
    reactions: [
      {
        reactionBody: 'What book was it?',
        username: 'curiousreader',
      },
      {
        reactionBody: "I'm always looking for recommendations.",
        username: 'avidreader',
      },
    ],
  },
  {
    _id: '60fcf22d56e431001f58f440',
    thoughtText: 'Excited to start my new job next week!',
    username: 'AliceSmith',
    reactions: [
      {
        reactionBody: 'Good luck!',
        username: 'wellwisher',
      },
      {
        reactionBody: "You'll do great!",
        username: 'supportivefriend',
      },
    ],
  },
  {
    _id: '60fcf22d56e431001f58f441',
    thoughtText: 'Just adopted a puppy!',
    username: 'AliceSmith',
    reactions: [
      {
        reactionBody: 'Congratulations!',
        username: 'animallover',
      },
      {
        reactionBody: 'What breed?',
        username: 'curiousdogowner',
      },
    ],
  },
  {
    _id: '60fcf22d56e431001f58f444',
    thoughtText: 'Heading to the gym for a workout.',
    username: 'BobJohnson',
    reactions: [
      {
        reactionBody: 'Get those gains!',
        username: 'fitnessfanatic',
      },
      {
        reactionBody: "Don't forget to stretch!",
        username: 'healthcoach',
      },
    ],
  },
  {
    _id: '60fcf22d56e431001f58f445',
    thoughtText: 'Trying out a new recipe for dinner tonight.',
    username: 'BobJohnson',
    reactions: [
      {
        reactionBody: 'Let us know how it turns out!',
        username: 'foodie',
      },
      {
        reactionBody: 'Sounds delicious!',
        username: 'culinaryenthusiast',
      },
    ],
  },
];

export const userData = [
  {
    _id: '60fcf22d56e431001f58f450',
    title: 'JohnDoe',
    email: 'johndoe@example.com',
    thoughts: ['60fcf22d56e431001f58f43c', '60fcf22d56e431001f58f43d'],
    friends: ['60fcf22d56e431001f58f453', '60fcf22d56e431001f58f456'],
  },
  {
    _id: '60fcf22d56e431001f58f453',
    title: 'AliceSmith',
    email: 'alice.smith@example.com',
    thoughts: ['60fcf22d56e431001f58f440', '60fcf22d56e431001f58f441'],
    friends: ['60fcf22d56e431001f58f450', '60fcf22d56e431001f58f456'],
  },
  {
    _id: '60fcf22d56e431001f58f456',
    title: 'BobJohnson',
    email: 'bob.johnson@example.com',
    thoughts: ['60fcf22d56e431001f58f444', '60fcf22d56e431001f58f445'],
    friends: ['60fcf22d56e431001f58f450', '60fcf22d56e431001f58f453'],
  },
];
