import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import fetchTask from '../App'
import Button from './Button'

const TaskDetails = () => {
    const [loading, setLoading] = useState(true);
    const [task, setTask] = useState({});
    const [error, setError] = useState(null);

    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(async () => {
        const fetchTask = async (id) => {
            const res = await fetch(`http://localhost:5000/tasks/${params.id}`);
            const data = await res.json();

            if (res.status === 404) {
                navigate('/');
            }

            return data
          }
        const data = await fetchTask();
        setTask(data);
        setLoading(false);
    })

    return loading ? (
        <h3>Loading...</h3>
    ) :
    (
        <div>
            <h3>
                {task.text}
            </h3>
            <p>{task.day}</p>
            <Button onClick={()=>{
                navigate(-1)
            }} text="Go Back"></Button>
            {/* <p>{location.pathname}</p> */}
        </div>
    )
}

export default TaskDetails
