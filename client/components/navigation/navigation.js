import React from "react";
import {Link} from "react-router-dom";

export default () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">ReactJs & Express</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                
                <li className="nav-item"><Link to="/login">Login</Link></li>
                <li className="nav-item"><Link to="/signup">Signup</Link></li>
                
                    
                    
                </ul>
            </div>
        </nav>  
    );
};