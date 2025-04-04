import React from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import DespesaInput from "../ui/DespesaInput";


function DespesaScreen() {
    const navigation = useNavigate()

    const handleBackClick = () => {
        navigation('/renda-screen')
    }

    const handleNextClick = () => {
        navigation('/historic-screen')
    }

    return (
        <div className="container-screen-mobile">
            <div className="info-mobile">
                <p className="p-mobile">
                Descreva suas despesas!
                </p>
                <p>
                    <span className="span-mobile">
                        (ex: "Luz, Internet e outros")
                    </span>
                </p>
            </div>

            <DespesaInput />

            <div className="box-icone-mobile">
                <span className="ico-mobile"
                onClick={handleBackClick}
                >
                    <FontAwesomeIcon 
                    icon={faArrowLeft} />
                </span>
                <span className="ico-mobile"
                onClick={handleNextClick}
                >
                    <FontAwesomeIcon 
                    icon={faArrowRight} />
                </span>
            </div>

        </div>
    );
};

export default DespesaScreen;