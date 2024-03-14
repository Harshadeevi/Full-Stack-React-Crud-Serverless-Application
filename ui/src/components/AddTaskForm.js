import { Button, Dialog, TextField } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from "@mui/icons-material/Add";
import axios from 'axios';
import { API_URL } from '../utilities';

export const AddTaskForm = ({ fetchTasks }) => {
    const [taskName, setTaskName] = useState("");

    const addNewTask = async () => {
        try {
            await axios.post(API_URL, {
                name: taskName,
                completed: false,
            });

            await fetchTasks();

            setTaskName("");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Dialog open={isDialogOpen}>
            <div className="dialog">
                <TextField size="small" label="Task" variant="outlined" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
                <Button variant="contained" onClick={addNewTask}>
                    Add Task
                </Button>
            </div>
        </Dialog>
    );
};

export default AddTaskForm;


