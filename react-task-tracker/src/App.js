import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
import AddTask from "./components/AddTask";


function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'School meeting',
      day: 'Feb 6th at 1:30pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Food shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false
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
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  // add reminder
  const addTask = (task) => {
    console.log('task: ', task)
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
    console.log(tasks)
  }

  
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask) } 
        showAdd={showAddTask}/>
      { showAddTask && <AddTask onAdd={addTask} /> }
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} 
        onToggle={toggleReminder} />) : 'No tasks to show'}
    </div>
  );
}

export default App;
