import { useReducer, useState } from "react"
import { usersReducer } from "../reducers/usersReducer"
import Swal from "sweetalert2"
import { findAll, remove, save, update } from "../services/userService"

const initialUsers = []

const initialUserForm = {
    id: 0,
    username: '',
    password: '',
    email: ''
}   

const initialErrors = {
    username: '',
    password: '',
    email: ''
}

export const useUsers = () => {
    const [users, dispatch] = useReducer(usersReducer, initialUsers)
    const [userSelected, setUserSelected] = useState(initialUserForm)
    const [visibleForm, setVisibleForm] = useState(false)
    const [errors, setErrors] = useState(initialErrors)

    const getUsers = async () => {
        const result = await findAll()
        dispatch({
            type: 'loadingUsers',
            payload: result.data
        })
    }

    const handlerAddUser = async user => {
        let response

        try {
            if (user.id === 0) {
                response = await save(user)
            } else {
                response = await update(user)
            }

            dispatch({
                type: (user.id === 0) ? 'addUser' : 'updateUser',
                payload: response.data
            })

            Swal.fire(
                (user.id === 0) ?
                    'Usuario creado' :
                    'Usuario actualizado',
                (user.id === 0) ?
                    'El usuario ha sido creado con exito!' :
                    'El usuario ha sido actualizado con exito!',
                'success'
            )
            handleCloseForm()
        } catch (error) {
            if(error.response && error.response.status) {
                setErrors(error.response.data)
            } else if(error.response && error.response.status == 500 && error.response.data?.message?.includes('constraint')) {
                if(error.response.data?.message?.includes('UK_username')) {
                    setErrors({username: 'El username ya existe!'})
                }
                if(error.response.data?.message?.includes('UK_email')) {
                    setErrors({username: 'El email ya existe!'})
                }
            } else {
                throw error
            }
        }
    }

    const handlerRemoveUser = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                remove(id)
                dispatch({
                    type: 'removeUser',
                    payload: id
                })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    const handlerUserSelectedForm = user => {
        setVisibleForm(true)
        setUserSelected({ ...user })
    }

    const handlerOpenForm = () => {
        setVisibleForm(true)
    }

    const handleCloseForm = () => {
        setVisibleForm(false)
        setUserSelected(initialUserForm)
        setErrors({})
    }
    return {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handleCloseForm,
        getUsers,
        errors
    }
}