
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

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