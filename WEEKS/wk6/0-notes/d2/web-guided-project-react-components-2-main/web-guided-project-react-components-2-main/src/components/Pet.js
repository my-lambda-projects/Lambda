import React from 'react'

export default function Pet(props) {
  const { pet } = props

  return (
    <div className='pet-friends container'>
      <p>{pet.name} ({pet.type})</p>
    </div>
  )
}
