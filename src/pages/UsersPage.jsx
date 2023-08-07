import { useContext, useEffect } from "react"
import { UserModalForm } from "../components/UserModalForm"
import { UsersList } from "../components/UsersList"
import { UserContext } from "../context/userContext"

function UsersPage() {
    const {
        users,
        visibleForm,
        handlerOpenForm,
        getUsers
    } = useContext(UserContext)

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            {!visibleForm || <UserModalForm />}
            <div className="container my-4">
                <h2>Users App</h2>
                <div className="row">
                    <div className="col-6">
                        {visibleForm || <button className="btn btn-primary fw-bold my-2" type="button" onClick={handlerOpenForm}>Nuevo Usuario</button>}
                        {users.length ? <UsersList /> : <p className="text-white fw-bold fs-2">No hay usuarios</p>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default UsersPage