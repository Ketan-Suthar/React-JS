import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react"
import AddTask from "./components/AddTask";


function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
  ])

  useEffect(() => {
    const getTasks = async () => {
      const tasks = await fetchTask()
      setTasks(tasks)
    }

    getTasks()
  }, [])

  // fetch tasks
  const fetchTask = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    return await res.json()
  }

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
