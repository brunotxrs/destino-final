import React from "react";

import '../css/BotaoPrincipal.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function BotaoPrincipal() {



    return (
        <div className="container-botao">

            <form className="box-btn">

                <fieldset className="box-fieldset">
                    
                <legend>Objetivo</legend>
                    <label for="">
                        <input type="text"  placeholder="Reforma"/>
                        <input type="number" placeholder="Valor R$"/>
                        
                    </label>

                    <div className="add-more">
                        <span className="icon-plus" >
                            <FontAwesomeIcon icon={faPlus} />
                        </span>
                    </div>
                </fieldset>

            </form>
        </div>
    );

};

export default BotaoPrincipal;