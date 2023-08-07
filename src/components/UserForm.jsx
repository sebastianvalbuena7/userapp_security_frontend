import { useState, useEffect, useContext } from "react"
import Swal from "sweetalert2"
import { UserContext } from "../context/userContext"

export const UserForm = ({ userSelected, handleCloseForm }) => {
    const { initialUserForm, handlerAddUser, errors } = useContext(UserContext)
    const [userForm, setUserForm] = useState(initialUserForm)

    const { username, password, email, id } = userForm

    useEffect(() => {
        setUserForm({ ...userSelected })
    }, [userSelected])

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setUserForm({
            ...userForm,
            [name]: value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        // if (Object.values(userForm).includes('')) {
        //     Swal.fire(
        //         'Error de validacion',
        //         'Debe completar todos los campos',
        //         'error'
        //     )
        //     return
        // }

        // if (!email.includes('@')) {
        //     Swal.fire(
        //         'Error de validacion email',
        //         'Coloca un email valido',
        //         'error'
        //     )
        //     return
        // }

        handlerAddUser(userForm)
        setUserForm(initialUserForm)
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" className="form-control my-3 w-75" placeholder="Username" name="username" value={username} onChange={onInputChange} />
            <p className="text-danger">{errors?.username}</p>

            {id > 0 || <input type="password" className="form-control my-3 w-75" placeholder="Password" name="password" value={password} onChange={onInputChange} />}
            <p className="text-danger">{errors?.password}</p>

            <input type="email" className="form-control my-3 w-75" placeholder="Email" name="email" value={email} onChange={onInputChange} />
            <p className="text-danger">{errors?.email}</p>
            
            <button type="submit" className="btn btn-primary fw-bold">{id > 0 ? 'Editar' : 'Crear'}</button>
            {!handleCloseForm || <button className="btn btn-primary fw-bold mx-2" type="button" onClick={handleCloseForm}>Cerrar</button>}
        </form>
    )
}