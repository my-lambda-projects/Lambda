import React from 'react'

export default function FriendForm(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
    const { name, value } = evt.target
    change(name, value)
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add a Friend</h2>

        {/* 🔥 DISABLE THE BUTTON */}
        <button>submit</button>

        <div className='errors'>
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.role}</div>
          <div>{errors.civil}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label>Username&nbsp;
          <input
            value={values.username}
            onChange={onChange}
            name='username'
            type='text'
          />
        </label>

        <label>Email
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='text'
          />
        </label>

        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        <label>Role
          <select
            onChange={onChange}
            value={values.role}
            name='role'
          >
            <option value=''>- Select an option -</option>
            <option value='student'>Student</option>
            <option value='alumni'>Alumni</option>
            <option value='instructor'>Instructor</option>
            <option value='tl'>Team Lead</option>
          </select>
        </label>

        {/* ////////// RADIO BUTTONS ////////// */}
        {/* ////////// RADIO BUTTONS ////////// */}
        {/* ////////// RADIO BUTTONS ////////// */}
        <label>Single

        </label>

        <label>Married

        </label>
      </div>

      <div className='form-group checkboxes'>
        <h4>Hobbies</h4>

        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
        <label>Hiking

        </label>

        <label>Reading

        </label>

        <label>Coding

        </label>
      </div>
    </form>
  )
}
