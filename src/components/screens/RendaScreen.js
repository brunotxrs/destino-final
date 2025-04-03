import React from "react";
import RendaInput from "../ui/RendaInput";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";


function RendaScreen() {

    const navigation = useNavigate()
    const handleBackClick = () => {
        navigation('/objetivo-screen')
    };

    return (

        <div className="container-screen-mobile">

            <div className="info-mobile">
                <p className="p-mobile">
                    Descreva sua renda fixa e renda não fixa.
                </p>
                <p>
                    <span className="span-mobile">
                        (ex: "Salário ou Outros")
                    </span>
                </p>
            </div>

            <RendaInput />

            <div className="box-icone-mobile">
                <span className="ico-mobile"
                onClick={handleBackClick}
                >
                    <FontAwesomeIcon 
                    icon={faArrowLeft} />
                </span>
                <span className="ico-mobile">
                    <FontAwesomeIcon 
                    icon={faArrowRight} />
                </span>
            </div>

        </div>

    );
};


export default RendaScreen;