import React from "react";
import ObjetivoInput from "../ui/ObjetivoInput"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


function ObjetivoScreen() {

    const navigation = useNavigate()

    const handleClick = () => {
        
        navigation('/renda-screen')

    }

    return (
        <div className="container-screen-mobile">

            <div className="info-mobile">
                <h1 className="title-mobile">
                    Descreva seus objetivos e as metas que deseja alcançar.
                </h1>
                <p>
                    <span className="span-mobile">
                        (ex: "Comprar um carro")
                    </span>
                </p>
            </div>

            <ObjetivoInput />

            <div className="box-icone-mobile">
                <span className="ico-mobile" 
                onClick={handleClick}><FontAwesomeIcon 
                icon={faArrowRight} />
                </span>
            </div>

        </div>
    );
};

export default ObjetivoScreen;