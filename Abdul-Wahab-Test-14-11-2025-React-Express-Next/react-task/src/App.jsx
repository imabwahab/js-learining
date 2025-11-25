import React from 'react'
import TaskList from './components/TaskList'
import { data } from './assets/data'
import './App.css'

const App = () => {



  return (
    <div className='h-screen bg-gray-800'>
      <TaskList data={data} />
    </div>
  )
}

export default App