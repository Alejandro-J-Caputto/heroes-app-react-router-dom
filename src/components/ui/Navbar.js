import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export const Navbar = () => {
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
                </div>
            </div>
            <div className="navbar-collapse  d-flex justify-content-end">
                <div className="navbar-nav" >
                  <NavLink activeClassName="active" className="nav-item nav-link"
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