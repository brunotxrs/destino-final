import React, { useContext } from "react";
import { Contexts } from "../contexts/Context"

import "../css/Historic.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


function HistoricScreen() {

    const { objetivos, rendas, despesas } = useContext(Contexts);

    const navigation = useNavigate()

   const handleBackClick = () => {
        navigation('/despesa-screen')
    }

    const resultadoDespesas = despesas.reduce((acc, despesa) => {
        const valorNumerico = parseFloat(despesa.valor) || 0;
        return acc + valorNumerico
    }, 0)



    return (
        <div className="container-historic">
            <h1 className="title">Suas Informações</h1>

            <h2 className="sub-title">Seus Objetivos</h2>
            {objetivos.map((objetivo) => (
                <div className="box-historic" key={objetivo.id}>
                    <div className="box-objetivo">
                        <span>{objetivo.texto}</span>
                        <span>{objetivo.valor}</span>
                    </div>
                </div>
            ))}
            <h2 className="sub-title">Suas Rendas</h2>
            {rendas.map((renda) => (
                <div className="box-historic" key={renda.id}>
                    <div className="box-objetivo">
                        <span>{renda.texto}</span>
                        <span>{renda.valor}</span>
                    </div>
                </div>
            ))}
            <h2 className="sub-title">Suas Despesas</h2>
            {despesas.map((despesa) => (
                <div className="box-historic" key={despesa.id}>
                    <div className="box-objetivo">
                        <span>{despesa.texto}</span>
                        <span>{despesa.valor}</span>
                    </div>
                </div>
            ))}

            <h3 className="sub-title">Resultado das Despesas:</h3>
            <div className="test">
                <span>R$ {resultadoDespesas.toFixed(2)}</span>
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


export default HistoricScreen;
