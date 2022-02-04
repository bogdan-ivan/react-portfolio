import React, { useEffect, useState, useCallback } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/UseHttp';

function App() {
  //const [isLoading, setIsLoading] = useState(false);
  //const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);

  // const configHttp = useMemo(() => {
  //   return {
  //     url: 'https://react-learning-1a872-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
  //   }
  // }, []);

  // const fetchTasks = useCallback(async (data) => {
  //   const loadedTasks = [];

  //   for (const taskKey in data) {
  //     loadedTasks.push({ id: taskKey, text: data[taskKey].text });
  //   }

  //   setTasks(loadedTasks);
  // }, []);

  // const [isLoading, error, sendRequest] = useHttp(fetchTasks);
  const [isLoading, error, sendRequest] = useHttp();

  useEffect(() => {
    const configHttp = {
      url: 'https://react-learning-1a872-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
    };

    const fetchTasks = async (data) => {
      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      setTasks(loadedTasks);
    };

    sendRequest(configHttp, fetchTasks);
  }, [sendRequest]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={sendRequest}
      />
    </React.Fragment>
  );
}

export default App;
