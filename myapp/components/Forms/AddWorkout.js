import { addWorkout } from '@/lib/actions'
import React from 'react'

const AddWorkout = () => {
  return (
    <>
    <form
    action={addWorkout}
    className='flex'
    >
        <input
            type='text'
            name='title'
            placeholder='Title...'
            />
            <button type='submit'>Create Workout</button>
    </form>
    </>

  )
}

export default AddWorkout