import React from "react";
import "../css/Logo.css"
import logo from "../../assets/mobile/logo-destino-final-mobile.svg"

function Logo() {

    return (

        <div className="container-logo">
            <div className="box-img-mobile">
                <img src={logo} />
            </div>
        </div>

    );

};


export default Logo;