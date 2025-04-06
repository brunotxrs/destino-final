import React from "react";
import Previsao from "../ui/Previsao";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";


function PrevisaoConclusaoObjetivo() {

    const navigation = useNavigate();

    const handleBackClick = () => {
        navigation('/planejamento-screen')
    };

    return (
        <div className="container-conclusao-objetivo">
            <Previsao />

            <div className="box-icone-mobile">
                <span className="ico-mobile"
                onClick={handleBackClick}
                >
                    <FontAwesomeIcon 
                    icon={faArrowLeft} />
                </span>
            </div>

        </div>
    );
};

export default PrevisaoConclusaoObjetivo;