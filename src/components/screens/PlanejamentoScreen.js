import React from "react";
import '../css/PlanejamentoScreen.css'
import ResultadoRenda from "../ui/ResultadoRenda";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


function PlanejamentoScreen() {
    const navigation = useNavigate();

    const handleBackClick = () => {
        navigation('/historic-screen')
    };


    return (

        <div className="container-planejamento">
            <div className="box-planejamento">
                <h1>Planejamento</h1>
                <ResultadoRenda />
                <p className="oxi">Defina a base do seu planejamento automático: selecione uma porcentagem.</p>
            </div>
            



            <div className="box-icone-mobile">
                <span className="ico-mobile"
                onClick={handleBackClick}
                >
                    <FontAwesomeIcon 
                    icon={faArrowLeft} />
                </span>
                <span className="ico-mobile"
                >
                    <FontAwesomeIcon 
                    icon={faArrowRight} />
                </span>
            </div>

        </div>
    );
};


export default PlanejamentoScreen;