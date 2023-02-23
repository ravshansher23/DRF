import React from "react";
import './Users.css'
const TodoItem = ({ item }) => {
    return (
        <tr>
            <td>
                {item.author}
            </td>
            <td>
                {item.project}
            </td>
            <td>
                {item.text}
            </td>
            <td>
                {item.created}
            </td>
            <td>
                {item.updated}
            </td>
            <td>
                {item.is_active}
            </td>
        </tr>
    )

}

const TodoList = ({ items }) => {
    return (
        <table className="table">
            <thead>
                <th>
                    Author
                </th>
                <th>
                    Project
                </th>
                <th>
                    Text
                </th>
                <th>
                    Created
                </th>
                <th>
                    Updated
                </th>
                <th>
                    Is active
                </th>
            </thead>
            <tbody>
                {items.map((item) => <TodoItem item={item} />)}
            </tbody>
        </table>
    )
}

export default TodoList