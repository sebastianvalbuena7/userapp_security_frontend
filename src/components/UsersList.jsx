import { useContext } from "react"
import { UserRow } from "./UserRow"
import { UserContext } from "../context/userContext"

export const UsersList = () => {
    const { users } = useContext(UserContext)
    return (
        <>
            <p>Listado de usuarios</p>
            <table className="table text-white">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>username</th>
                        <th>email</th>
                        <th>update</th>
                        <th>update route</th>
                        <th>remove</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map(user => <UserRow key={user.id} user={user} />)
                    }
                </tbody>

                <tfoot>

                </tfoot>
            </table>
        </>
    )
}