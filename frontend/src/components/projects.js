import React from "react";
import './Users.css'
const ProjectItem = ({ item }) => {
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
        </tr>
    )

}

const ProjectList = ({ items }) => {
    return(
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
            </thead>
            <tbody>
            {items.map((item) => <ProjectItem item={item}/>)}
            </tbody>
        </table>
    )
}

export default ProjectList