import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
// import Routing from './Routing'

function App() {
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

// Delete a Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div className="container">
      <Header />
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