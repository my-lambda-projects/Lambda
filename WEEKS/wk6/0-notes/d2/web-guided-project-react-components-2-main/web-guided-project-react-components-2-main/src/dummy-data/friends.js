import { v4 as uuid } from 'uuid'

export const hello = 'world'

export default [
  {
    id: uuid(),
    name: 'Les',
    age: 23,
    hobbies: [
      'hiking',
      'netflix',
      'death metal',
      'coding',
    ],
    married: true,
    pets: [
      { id: uuid(), name: 'Fido', type: 'Maltese' },
      { id: uuid(), name: 'Goldie', type: 'Goldfish' },
    ]
  },
  {
    id: uuid(),
    name: 'Buddy',
    age: 27,
    hobbies: [
      'fishing',
      'sightseeing',
      'heavy metal',
      'coding',
    ],
    married: false,
    pets: [
      { id: uuid(), name: 'Venus', type: 'Venus fly trap' },
      { id: uuid(), name: 'Wolfie', type: 'German Sheppard' },
    ]
  },
  {
    id: uuid(),
    name: 'Brian',
    age: 31,
    hobbies: [
      'exotic animals',
      'bird watching',
      'hiking',
      'coding',
    ],
    married: true,
    pets: [
      { id: uuid(), name: 'Tony', type: 'Tiger' },
      { id: uuid(), name: 'Sharkie', type: 'Great White Shark' },
    ]
  },
]
