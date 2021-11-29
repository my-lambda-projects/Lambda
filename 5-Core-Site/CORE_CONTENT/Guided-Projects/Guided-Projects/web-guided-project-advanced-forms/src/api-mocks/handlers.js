// This is for the fake API. Do not delete!
import { rest } from 'msw'
import { v4 as uuid } from 'uuid'

const friends = [
  {
    id: uuid(),
    username: 'Michael',
    email: 'michael@michael.com',
    role: 'student',
    civil: 'single',
    hobbies: [
      'hiking',
      'reading',
      'coding',
    ],
  },
]

function getAllFriends(req, res, ctx) {
  return res(
    ctx.status(200),
    ctx.json(friends),
  )
}

function createNewFriend(req, res, ctx) {
  const { username, email, role, civil } = req.body
  const requiredFields = { username, email, role, civil }

  if (Object.values(requiredFields).some(field => (!field || !field.trim()))) {
    return res(
      ctx.status(400),
      ctx.json({ message: 'Some required fields are missing or invalid.' }),
    )
  }

  if (req.body.hobbies && !Array.isArray(req.body.hobbies)) {
    return res(
      ctx.status(400),
      ctx.json({ message: 'The optional `hobbies` field must be an array.' }),
    )
  }

  const newFriend = { id: uuid(), ...req.body }
  friends.unshift(newFriend)

  return res(
    ctx.status(201),
    ctx.json(newFriend),
  )
}

export const handlers = [
  rest.get('http://buddies.com/api/friends', getAllFriends),
  rest.post('http://buddies.com/api/friends', createNewFriend),
]
