import React from 'react';

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">TiendaSoft</a>
                <div className="collapse navbar-collapse" id="navbarColor03">
                    <form className='w-100 mr-3'>
                        <input className="form-control me-sm-2" type="text" placeholder="Buscar producto..." />
                    </form>
                </div>
                <button className="btn btn-secondary my-2 my-sm-0" onClick={props.signout}>Cerrar Sesion</button>
            </div>
        </nav>
    )
}

export default Navbar;