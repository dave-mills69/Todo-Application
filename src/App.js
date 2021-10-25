import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';
// import Routing from './Routing'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks ] = useState([
    {
      id: 1,
      text: 'Feed the Dogs',
      day: 'Daily',
      reminder: true,
    },
    {
      id: 2,
      text: 'Clip Dogs Nails',
      day: 'bi-weekly',
      reminder: true,
    },
    {
      id: 3,
      text: 'Grocery Shopping',
      day: 'Wednesday of Every Week',
      reminder: false,
    }
])

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
    <div className="container">
      <Header />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?(
      <Tasks tasks={tasks}
      onDelete={deleteTask} />
    ) : (
      'No Tasks at This Time'
    )}
    </div>
  );
}

export default App;