import { getUserWorkouts } from '@/lib/data'
import React from 'react'

const Dashboard = async () => {
  const workouts = await getUserWorkouts()

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div
       style={{marginTop: '-200px'}}
       className="text-center flex flex-col text-white"
      >
        {workouts.length === 0 ? (
          <p className="text-grey">No workouts found. Create a workout to get started!</p>
        ) : (
          <ul>
            {workouts.map((workout) => (
              <div key={workout.id}>
                <span className='text-grey'>{workout.title}</span>
              </div>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default Dashboard

