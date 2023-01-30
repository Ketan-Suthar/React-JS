import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"


function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor appointment',
      day: 'Feb 5th at 2:30pm',
      remider: true
    },
    {
      id: 2,
      text: 'School meeting',
      day: 'Feb 6th at 1:30pm',
      remider: true
    },
    {
      id: 3,
      text: 'Food shopping',
      day: 'Feb 5th at 2:30pm',
      remider: false
    }
  ])

  // Delete task
  const deleteTask = (id) => {
    console.log('delete: ' + id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder
  const toggleReminder = (id) => {
    console.log('toggle reminder: ' + id)
    setTasks(tasks.map((task) => task.id === id ? {...task, remider: !task.remider} : task))
  }

  
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} 
        onToggle={toggleReminder} />) : 'No tasks to show'}
    </div>
  );
}

export default App;
