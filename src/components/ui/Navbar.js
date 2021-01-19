import React, { useContext } from 'react'
import { Link, NavLink,useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types'
export const Navbar = () => {
    const history = useHistory();
    
    const {user, dispatch} = useContext(AuthContext)
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">

           <Link  className="navbar-brand"  to="/">
                Asociaciones
            </Link>
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink activeClassName="active" className="nav-item nav-link"
                        exact
                        to="/marvel">
                        Marvel
                    </NavLink>
                    <NavLink activeClassName="active" className="nav-item nav-link"
                        exact
                        to="/dc">
                        DC
                    </NavLink>
                    <NavLink activeClassName="active" className="nav-item nav-link"
                        exact
                        to="/search">
                        Search
                    </NavLink>
                </div>
            </div>
            <div className="navbar-collapse  d-flex justify-content-end">
                <div className="navbar-nav" >
                    <p className="nav-item nav-ling text-info">{(user.logged === true) && user.name}</p>
                  <NavLink activeClassName="active" className="nav-item nav-link"
                        onClick={() => {
                            dispatch({
                                type: types.logout,
                                payload: null
                            })
                            history.replace('/login')
                        }}
                        exact
                        to="/login">
                        Logout
                    </NavLink>
                </div>
            </div>
            </div>
        </nav>
    )
}
