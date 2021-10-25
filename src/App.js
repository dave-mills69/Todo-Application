
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  // useEffect
  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch('http://
      localhost5000/tasks')
      const data = await res.json()

      console.log(data)
    }

    fetchTasks()
  }, [])

// Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 999) + 1
    const newTask ={id, ...task}
    setTasks([...tasks, newTask])
  }

// Delete a Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    
    <div className='container'>
      <Header onAdd={() => 
        setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
        <>
          {showAddTask && <AddTask onAdd={addTask} />}
          {tasks.length > 0 ? (
            <Tasks 
              tasks={tasks} 
              onDelete={deleteTask}
            />
          ) : (
            'No Tasks To Show'
          )}
        </>
    </ div>
  )
};
  


export default App