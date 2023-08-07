import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../../auth/context/AuthContext"

export const Navbar = () => {
    const { login, handlerLogout } = useContext(AuthContext)
    const { user } = login
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">UsersApp</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className='nav-link' to='/users'>Usuarios</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to='/users/register'>Registrar Usuario</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="collapse navbar-collapse justify-content-end" id="navbarLogout">
                    <span className="nav-item nav-link text-primary mx-3">
                        {user?.username}
                    </span>
                    <button className="btn btn-danger fw-bold mt-3" onClick={handlerLogout}>Logout</button>
                </div>
            </div>
        </nav>
    )
}