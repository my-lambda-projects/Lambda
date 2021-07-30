const posts = [
  {
    user_id: 1,
    text: 'I wish the ring had never come to me. I wish none of this had happened.',
  },
  {
    user_id: 1,
    text: 'I think we should get off the road. Get off the road! Quick!',
  },
  {
    user_id: 1,
    text: 'Our business is our own.'
  },
  {
    user_id: 1,
    text: 'Can you protect me from yourself?'
  },
  {
    user_id: 2,
    text: "I ain't been droppin' no eaves, sir! Promise!"
  },
  {
    user_id: 2,
    text: "Of course you are, and I'm coming with you!"
  },
  {
    user_id: 2,
    text: "I made a promise, Mr Frodo. A promise. Don't you leave him Samwise Gamgee. And I don't mean to. I don't mean to.",
  },
  {
    user_id: 2,
    text: " N-nothing important. That is, I heard a great deal about a ring, a Dark Lord, and something about the end of the world, but... Please, Mr. Gandalf, sir, don't hurt me.",
  },
  {
    user_id: 3,
    text: 'Well, that rules you out, Pip.'
  },
  {
    user_id: 4,
    text: "We've had one yes. What about second breakfast?"
  },
  {
    user_id: 4,
    text: 'You need people of intelligence on this sort of mission...quest...thing.',
  },
  {
    user_id: 5,
    text: 'A wizard is never late, Frodo Baggins. Nor is he early. He arrives precisely when he means to.',
  },
  {
    user_id: 5,
    text: 'One ring to rule them all. One ring to find them. One ring to bring them all and in the darkness bind them!',
  },
  {
    user_id: 5,
    text: 'Is it secret?! Is it safe?!'
  },
  {
    user_id: 5,
    text: 'A Balrog. A demon of the ancient world. This foe is beyond any of you. Run!',
  },
  {
    user_id: 5,
    text: 'When in doubt, follow your nose.'
  },
  {
    user_id: 5,
    text: 'YOU SHALL NOT PASS!'
  },
  {
    user_id: 5,
    text: 'Fly you fools!'
  },
  {
    user_id: 5,
    text: 'All you have to do is decide what to do with the time that is given to you.',
  },
  {
    user_id: 5,
    text: 'Do not be so quick to deal out death and judgement. Even the very wise do not see all ends.',
  },
  {
    user_id: 5,
    text: ' Fool of a Took! Throw yourself in next time and rid us of your stupidity!',
  },
  {
    user_id: 6,
    text: 'One does not simply walk into Mordor. Its black gates are guarded by more than just orcs. There is evil there that does not sleep. And the Great Eye, is ever watchful',
  },
  {
    user_id: 6,
    text: 'It is a strange fate that we should suffer so much fear and doubt over so small a thing. Such a little thing.',
  },
  {
    user_id: 6,
    text: 'Gondor has no king, Gondor needs no king.'
  },
  {
    user_id: 7,
    text: 'Lembas! Elvish waybread. One small bite is enough to fill a stomach of a grown man.',
  },
  {
    user_id: 7,
    text: 'This is no mere Ranger. He is Aragorn, son of Arathorn. You owe him your allegiance.',
  },
  {
    user_id: 7,
    text: 'Have you heard nothing what Lord Elrond has said? The ring must be destroyed!',
  },
  {
    user_id: 8,
    text: 'Nobody tosses a Dwarf!'
  },
  {
    user_id: 8,
    text: 'I will be dead before I see the ring in the hands of an elf! Never trust an elf!',
  },
  {
    user_id: 8,
    text: "And I suppose you think you're the one to do it!"
  },
  {
    user_id: 8,
    text: 'I have been dealt a wound beyond all healing, for I have looked the last... upon that which was fairest. Henceforth I will call nothing fair unless it be her gift to me.',
  },
  {
    user_id: 8,
    text: 'I asked for one hair from her golden head... she gave me three.',
  },
  {
    user_id: 9,
    text: "We will not abandon Merry and Pippin to torment and death. Not while we have strength left. Leave all that can be spared behind. We travel light. Let's hunt some orc.",
  },
  {
    user_id: 9,
    text: 'You cannot wield it! None of us can! The One Ring answers to Sauron alone. It has no other master.',
  },
  {
    user_id: 9,
    text: "You draw too much attention to yourself, 'Mister Underhill'.",
  },
  {
    user_id: 9,
    text: "A little more caution from you, that's no trinket you carry.",
  },
  {
    user_id: 9,
    text: 'I would have gone with you to the end, into the very fires of Mordor.',
  },
  {
    user_id: 9,
    text: 'Indeed. I can avoid being seen, if I wish, but to disappear entirely, that is a rare gift.',
  },
];

exports.posts = posts;

exports.seed = function (knex) {
  return knex('posts').insert(posts);
};
