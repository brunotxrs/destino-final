import React from "react";

import "../css/RendaScreen.css"
import logo from "../../assets/mobile/logo-destino-final-mobile.svg"
import BotaoPrincipal from "../ui/BotaoPrincipal";


function RendaScreen() {

    return (

        <div className="renda-container">
            <div className="box-img-mobile">
                <img src={logo} />
            </div>
            <BotaoPrincipal />


        </div>

    );
};


export default RendaScreen;