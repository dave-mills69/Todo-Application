import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'
import Dashboard from './components/Dashboard'



const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }
  fetchTask();

  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTasks([...tasks, data])
  }

  // Delete Task
  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert('Error Deleting This Task')
  }

  return (
    <Router>
      <div className='container'>
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />


        <Route
          path='/'
          exact
          render={(props) => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                />
              ) : (
              <h2>  'Add a Task' </h2>
              )}
            </>
          )}
        />
        <Route path='/About' component={About} />
        <Route path='/Dashboard' component={Dashboard} />
        <Footer />
      </div>
    </Router>
  )
}

export default App



























// import {BrowserRouter as Router, Route} from 'react-router-dom'
// import { useState, useEffect } from 'react'
// import Header from './components/Header'
// import Tasks from './components/Tasks'
// import AddTask from './components/AddTask'
// import Footer from './components/Footer'
// import About from './components/About'

// const App = () => {
//   const [showAddTask, setShowAddTask] = useState(false)
//   const [tasks, setTasks] = useState([])

//   // useEffect
//   useEffect(() => {
//     const getTasks = async () => {
//       const tasksFromServer = await fetchTasks()
//       setTasks(tasksFromServer)
//     }

//     getTasks()
//   }, [])

//   // fetching task from server
//     const fetchTasks = async () => {
//       const res = await fetch('http://localhost:5000/tasks')
//       const data = await res.json()
  
//       return data
//     }

//   // Fetch Task
//   const fetchTask = async (id) => {
//     const res = await fetch(`http://localhost:5000/tasks/${id}`)
//     const data = await res.json()

//     return data
//   }

//   // Add Task
//   const addTask = async (task) => {
//     const res = await fetch('http://localhost:5000/tasks', {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//       },
//       body: JSON.stringify(task),
//     })

//     const data = await res.json()

//     setTasks([...tasks, data])
//   }

//   // Delete Task
//   const deleteTask = async (id) => {
//     const res = await fetch(`http://localhost:5000/tasks/${id}`, {
//       method: 'DELETE',
//     })
//     //We should control the response status to decide if we will change the state or not.
//     res.status === 200
//       ? setTasks(tasks.filter((task) => task.id !== id))
//       : alert('Error Deleting This Task')
//   }

//   return (
//     <Router>
//       <div className='container'>
//         <Header
//           onAdd={() => setShowAddTask(!showAddTask)}
//           showAdd={showAddTask}
//         />
//         <Route
//           path='/'
//           exact
//           render={(props) => (
//             <>
//               {showAddTask && <AddTask onAdd={addTask} />}
//               {tasks.length > 0 ? (
//                 <Tasks
//                   tasks={tasks}
//                   onDelete={deleteTask}
//                 />
//               ) : (
//                 'There are no Tasks'
//               )}
//             </>
//           )}
//         />
//         <Route path='/about' component={About} />
//         <Footer />
//       </div>
//     </Router>
//   )
// }
  


// export default App