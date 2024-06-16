import { useEffect, useState } from "react"
import Header from "./Components/Header"
import Tasks from "./Components/Tasks"
import LoadingScreen from "./Components/LoadingScreen";

const LOCAL_STORAGE_KEY = "todo:savedTasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(saved) {
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedTasks();

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000)
    }, 6000);

    return () => clearTimeout(timer);
  }, [])

  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function addTask(taskTitle) {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompeted: false
      }
    ])
  }

  function toggleTaskCompletedById(taskId) {
    const newTasks = tasks.map(task =>
      {
        if(task.id == taskId) {
          return {
            ...task,
            isCompleted: !task.isCompleted
          }
        }
        return task;
      }
    );
    setTasksAndSave(newTasks);
  }

  function deleteTaskById(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  if (loading) {
    return <LoadingScreen fadeOut={fadeOut} />;
  }

  return (
    <>
    <div>
      <Header onAddTask={addTask}/>
      <Tasks 
        tasks={tasks}
        onComplete={toggleTaskCompletedById}
        onDelete={deleteTaskById}
      
      />
      
    </div>
    </>
  )
}

export default App
