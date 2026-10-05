import { useEffect,useState } from 'react'

const getProjects = () => {
        fetch("http://127.0.0.1:8000/send_projects/", {
            method: "POST",
            body: JSON.stringify({
                username: userId
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(res => res.json())
        .then(res => {
            console.log(res.tasks)
            setTasks(res.tasks)
            setProjects(res.proyectos)
        })
    }

export { getProjects , }