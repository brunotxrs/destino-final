import React from "react";
import RendaInput from "../ui/RendaInput";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function RendaScreen() {

    return (

        <div className="container-screen-mobile">

            <div className="info-mobile">
                <p className="p-mobile">
                    Descreva seus objetivos e as metas que deseja alcançar.
                </p>
                <p>
                    <span className="span-mobile">
                        (ex: "Comprar um carro")
                    </span>
                </p>
            </div>

            <RendaInput />

            <div className="box-icone-mobile">
                <span className="ico-mobile">
                    <FontAwesomeIcon 
                    icon={faArrowRight} />
                </span>
            </div>

        </div>

    );
};


export default RendaScreen;