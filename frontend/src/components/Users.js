import React from "react";
import './Users.css'
const UsersItem = ({ user }) => {
    return (
        <tr>
            <td>
                {user.username}
            </td>
            <td>
                {user.first_name}
            </td>
            <td>
                {user.last_name}
            </td>
            <td>
                {user.email}
            </td>
        </tr>
    )

}

const UsersList = ({users}) => {
    return(
        <table className="table">
            <thead>
            <th>
                Username
            </th>
            <th>
                First name
            </th>
            <th>
                Last name
            </th>
            <th>
                Email
            </th>
            </thead>
            <tbody>
            {users.map((user) => <UsersItem user={user}/>)}
            </tbody>
        </table>
    )
}

export default UsersList