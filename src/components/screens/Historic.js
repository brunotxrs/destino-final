import React from "react";
import HistoricScreen from "./HistoricScreen";
import PlanejamentoScreen from "../screens/PlanejamentoScreen"
import PrevisaoConclusaoObjetivo from "./PrevisaoConclusaoObjetivo";

import '../css/HistoricDesktop.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";



function Historic() {

    const navigation = useNavigate()

    const handleClickBack = () => {
        navigation('/objetivo-screen')
    }

    return (

        <section>

            <div className="box-section">
                <div className="box-screen-desktop">

                    <div className="box-info">
                        <h1>Suas Informações</h1>
                    </div>
                    <HistoricScreen />

                </div>

                <div className="box-screen-desktop">
                    <div className="box-info">
                        <h1>Planejamento</h1>
                        <p>Defina a base do seu planejamento. 
                        Você pode escolher uma porcentagem ou inserir um valor personalizado.</p>
                    </div>
                    <PlanejamentoScreen />
                </div>

                <div className="box-screen-desktop">
                    <div className="box-info">
                        <h1>Previsão de Conclusão dos Objetivos</h1>
                    </div>
                    <PrevisaoConclusaoObjetivo />
                </div>
            </div>

            <div className="box-icone-desktop">
                <span className="ico-mobile"
                onClick={handleClickBack}
                ><FontAwesomeIcon
                icon={faArrowLeft} />
                </span>
            </div>

        </section>
    );
};


export default Historic;
