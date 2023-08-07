import { useUsers } from "../hooks/useUsers"
import { UserContext } from "./userContext"

export const UserProvider = ({ children }) => {
    const {
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
    } = useUsers()
    return (
        <UserContext.Provider value={
            {
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
        }>
            {children}
        </UserContext.Provider>
    )
}