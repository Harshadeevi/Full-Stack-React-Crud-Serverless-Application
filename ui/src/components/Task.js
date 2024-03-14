import { Checkbox, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useState } from 'react';
import UpdateTaskForm from './UpdateTaskForm';
import classNames from "classnames";
import axios from 'axios';
import { API_URL } from '../utilities';
import { fetchTasks } from '../../../api/task';

export const Task = ({ task, fetchTasks }) => {
    const { id, name, completed } = task; // Added 'id' to destructured object
    const [isComplete, setIsComplete] = useState(completed);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleUpdateTaskCompletion = async () => {
        try {
            await axios.put(API_URL, {
                id,
                name,
                completed: isComplete,
            });
            setIsComplete((prev) => !prev);
        } catch (err) {
            console.log(err);
        }
    };

    const handleDeleteTask = async () => {
        try {
            await axios.delete(`${API_URL}/${task.id}`); // Corrected string interpolation syntax
            await fetchTasks();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={classNames("flex", { done: isComplete })}>
            <Checkbox checked={isComplete} onChange={handleUpdateTaskCompletion} />
            <Typography variant="h4">{name}</Typography>

            <div className="taskButtons">
                <button variant="contained" onClick={() => setIsDialogOpen(true)}>
                    <EditIcon />
                </button>
                <button color="error" variant="contained" onClick={handleDeleteTask}>
                    <DeleteIcon />
                </button>
            </div>

            <UpdateTaskForm
                fetchTasks={fetchTasks}
                isDialogOpen={isDialogOpen}
                setIsDialogOpen={setIsDialogOpen}
                task={task} />
        </div>
    );
};

export default Task;


