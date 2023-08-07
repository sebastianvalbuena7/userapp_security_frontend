import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { UserContext } from "../context/userContext"

export const UserRow = ({ user }) => {
    const { handlerRemoveUser, handlerUserSelectedForm } = useContext(UserContext)
    const { id, username, email } = user
    return (
        <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>
                <button type="button" className="btn btn-secondary btn-sm" onClick={() => handlerUserSelectedForm({
                    id,
                    username,
                    email
                })}>update</button>
            </td>
            <td>
                <NavLink className={'btn btn-secondary btn-sm'} to={'/users/edit/' + id}>Update route</NavLink>
            </td>
            <td>
                <button type="button" className="btn btn-danger btn-sm" onClick={() => handlerRemoveUser(id)}>X</button>
            </td>
        </tr>
    )
}