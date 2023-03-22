import React from "react";
import {Link} from "react-router-dom";
import './Users.css'
const ProjectItem = ({ item, deleteProject }) => {
    return (
        <tr>
            <td>
                {item.name}
            </td>
            <td>
                {item.link}
            </td>
            <td>
                {item.users}
            </td>
            <td><button onClick={() => deleteProject(item.id)} type='button'>Delete</button></td>
        </tr>
    )

}

const ProjectList = ({ items, deleteProject }) => {
    return(
        <div>
        <table className="table">
            <thead>
            <th>
                Name
            </th>
            <th>
                Link
            </th>
            <th>
                Users
            </th>
            <th></th>
            </thead>
            <tbody>
            {items.map((item) => <ProjectItem item={item} deleteProject={deleteProject()}/>)}
            </tbody>
        </table>
        <Link to='/projects/create'>Create</Link>
        </div>
    )
}

export default ProjectList