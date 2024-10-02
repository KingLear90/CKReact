import React from "react"

function Header() {

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <a href="#" className="navbar-brand">ChessKingdom</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="navbar-item">
                            <a href="#" className="nav-link-active">Home</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#" className="nav-link">Aprendizaje</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#" className="nav-link">Galería</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#" className="nav-link">Contacto</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )

}

export default Header;

