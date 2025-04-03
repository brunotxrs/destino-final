import React from "react";

import "../css/RendaScreen.css"
import logo from "../../assets/mobile/logo-destino-final-mobile.svg"
import ObjetivoInput from "../ui/ObjetivoInput";
import RendaInput from "../ui/RendaInput";


function RendaScreen() {

    return (

        <div className="renda-container">
            <div className="box-img-mobile">
                <img src={logo} />
            </div>
            <ObjetivoInput />
            <RendaInput />


        </div>

    );
};


export default RendaScreen;