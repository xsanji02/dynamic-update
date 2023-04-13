import React, { useState } from 'react'
import data from './data'
import List from './List'
import './App.css'


function App() {
  const [details, setDetails] = useState(data)

  function deleteAll() {
    setDetails(prevState => prevState.splice())
  }
  
  function toggleRefresh() {
    location.reload()
  }
  return (
    <>
    <h2>Dynamic Update Using ReactJs</h2>
    <div className='border'>
      <section>
        <h3>{details.length} Birthdays Today</h3>
        {details.map(personDetails => {
          return (
            <List image={personDetails.img}
                  name={personDetails.fullName}
                  age={personDetails.age} />
          )
        })}
        <button className='btn-clear' onClick={deleteAll}>Clear All</button>
        <button className='btn-refresh' onClick={toggleRefresh}>Refresh</button>
      </section>
    </div>
    </>
  )
}

export default App