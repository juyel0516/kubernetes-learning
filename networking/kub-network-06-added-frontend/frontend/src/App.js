import React, {useState, useEffect, useCallback} from 'react';

import './App.css';
import TaskList from './components/TaskList';
import NewTask from './components/NewTask';

function App() {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = useCallback(function () {
        fetch('http://192.168.49.2:30490/tasks', {
            headers: {
                'Authorization': 'Bearer abc'
            }
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (jsonData) {
                console.log(jsonData);
                setTasks(jsonData.tasks);
            }).catch((error) => {
            console.log(error);
        });
    }, []);

    useEffect(
        function () {
            fetchTasks();
        },
        [fetchTasks]
    );

    function addTaskHandler(task) {
        fetch('http://192.168.49.2:30490/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer abc',
            },
            body: JSON.stringify(task),
        })
            .then(function (response) {
                console.log(response);
                return response.json();
            })
            .then(function (resData) {
                console.log(resData);
            });
    }

    return (
        <div className='App'>
            <section>
                <NewTask onAddTask={addTaskHandler}/>
            </section>
            <section>
                <button onClick={fetchTasks}>Fetch Tasks</button>
                <TaskList tasks={tasks}/>
            </section>
        </div>
    );
}

export default App;