import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header'
import { Tasks } from './Tasks'
import CreateTask from './CreateTask'
import { getAllTasks, deleteTask, fetchSettings } from '../services/TaskService'
import HomeCarousel from './HomeCarousel';
import AskUser from './AskUser';
import HowWorks from './HowWorks';

function Home() {

  const [tasks, setTasks] = useState([])
  const [numberOfTasks, setNumberOfTasks] = useState([])
  const [isTaskEdited, setTaskEdited] = useState(false)

  useEffect(() => {
    getAllTasks().then(tasks => {
        console.log(tasks)
        setTasks(tasks)
      });
  }, [numberOfTasks, isTaskEdited])

  const useStyles = makeStyles(() => ({
    appContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }));


  function delTask(taskId) {
      deleteTask(taskId).then(response => {
        console.log(response)
        setNumberOfTasks(numberOfTasks - 1)
      });
  }

  function taskCreated() {
    setNumberOfTasks(numberOfTasks + 1)
  }

  function taskEdited(res) {
     setTaskEdited(res)
  }

  const classes = useStyles();
    
  return (
    <div className={`${classes.appContainer} App`}>
      <Header></Header>
      <HomeCarousel></HomeCarousel>
      <AskUser></AskUser>
  </div>
  );
}

export default Home;
