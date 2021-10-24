import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
