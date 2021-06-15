import React, { useState, useEffect } from "react";

interface Task {
  id: number;
  title: string;
}

const DrfApiFetch: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task>();
  const [editedTask, setEditedTask] = useState<Task>({} as Task);
  const [id, setId] = useState(1);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/tasks/", {
      method: "GET",
      headers: {
        Authorization: "Token e410c7c8981de2c0c95fda844831479f485ee8cc",
      },
    })
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  const getTask = () => {
    fetch(`http://127.0.0.1:8000/api/tasks/${id}/`, {
      method: "GET",
      headers: {
        Authorization: "Token e410c7c8981de2c0c95fda844831479f485ee8cc",
      },
    })
      .then((res) => res.json())
      .then((data) => setSelectedTask(data));
  };

  const deleteTask = (id: number) => {
    fetch(`http://127.0.0.1:8000/api/tasks/${id}/`, {
      method: "DELETE",
      headers: {
        Authorization: "Token e410c7c8981de2c0c95fda844831479f485ee8cc",
      },
    }).then((res) => {
      setTasks(tasks.filter((task) => task.id !== id));
      setSelectedTask({} as Task);
    });
  };

  const newTask = (task: Task) => {
    const data = { title: task.title };
    fetch(`http://127.0.0.1:8000/api/tasks/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token e410c7c8981de2c0c95fda844831479f485ee8cc",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(function (data) {
        setTasks([...tasks, data]);
        setEditedTask({ title: "" } as Task);
      });
  };

  const editTask = (task: Task) => {
    fetch(`http://127.0.0.1:8000/api/tasks/${task.id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token e410c7c8981de2c0c95fda844831479f485ee8cc",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        setTasks(
          tasks.map((task) => (task.id === editedTask.id ? data : task))
        );
        setEditedTask({ title: "" } as Task);
      });
  };

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    const name = evt.target.name;
    setEditedTask({ ...editedTask, [name]: value });
  };

  return (
    <div>
      <ul>
        {tasks!.map((task) => (
          <li key={task.id}>
            {" "}
            {task.title} {task.id}
            <button onClick={() => deleteTask(task.id!)}>
              <i className="fas fa-trash-alt"></i>
            </button>
            <button onClick={() => setEditedTask(task)}>
              <i className="fas fa-pen"></i>
            </button>
          </li>
        ))}
      </ul>
      Set id <br />
      <input
        type="text"
        value={id}
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
          setId(Number(evt.target.value))
        }
      />
      <br />
      <button type="button" onClick={() => getTask()}>
        Get task
      </button>
      <h3>
        {selectedTask?.title} {selectedTask?.id}
      </h3>
      <input
        type="text"
        name="title"
        value={editedTask.title}
        onChange={(evt) => handleInputChange(evt)}
        placeholder="New task ?"
        required
      />
      {editedTask.id ? (
        <button onClick={() => editTask(editedTask)}>Update</button>
      ) : (
        <button onClick={() => newTask(editedTask)}>Create</button>
      )}
    </div>
  );
};

export default DrfApiFetch;
