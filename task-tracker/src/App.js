import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';
import TaskDetails from './components/TaskDetails';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();

  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data
  }

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data
  }

  // Add task
  const addTask = async (task) => {
    // console.log(task);
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = {id, ...task};
    // setTasks([...tasks, newTask]);

    // Add request
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(task)
    })

    const data = await res.json();
    setTasks([...tasks, data]);

  }

  // Delete task
  const deleteTask = async (id) => {
    console.log("Delete", id);
    setTasks(tasks.filter((task) => task.id !== id));

    // Delete request
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    })
  }

  const toggleReminder = async (id) => {
    // console.log("Toggle", id);
    // setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task ))

    const tasktoToggle = await fetchTask(id);
    const updatedTask = { ...tasktoToggle, reminder: !tasktoToggle.reminder };
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json();

    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task))
  }

  return (
    <Router>
      <div className="container">
        <Header title="Task Tracker" color="black" onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask} />
        <Routes>
          <Route path='/' element={
            <>
            {showAddTask && <AddTask onAdd={addTask} />}
            {
              tasks.length > 0 ?
                (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) :
                ("No tasks to show")
            }
            </>
          }/>
          <Route path='/about' element={<About/>} />
          <Route path='/task/:id' element={<TaskDetails/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );

  // return (
  //   <Router>
  //     <div className="container">
  //       <Header title="Task Tracker" color="black" onAdd={() => setShowAddTask(!showAddTask)}
  //         showAdd={showAddTask} />
  //         <Route path='/' exact render={(props) => {
  //           <>
  //             {showAddTask && <AddTask onAdd={addTask} />}
  //             {
  //               tasks.length > 0 ?
  //                 (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) :
  //                 ("No tasks to show")
  //             }
  //           </>
  //         }} />
  //         <Route path='/about' component={About} />
  //       <Footer />
  //     </div>
  //   </Router>
  // );

}

export default App;
