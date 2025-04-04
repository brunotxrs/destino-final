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
    };

    const handleNextClick = () => {
        navigation('/planejamento-screen')
    };

    const temObjetivo = objetivos.some( objetivo => objetivo.valor !== "");

    const resultadoRenda = rendas.reduce((abb, renda) => {
        const valorNumerico = parseFloat(renda.valor) || 0;
        return abb + valorNumerico;
    }, 0);
    

    const resultadoDespesas = despesas.reduce((acc, despesa) => {
        const valorNumerico = parseFloat(despesa.valor) || 0;
        return acc + valorNumerico
    }, 0);
    

    const saldoLiquido = resultadoRenda - resultadoDespesas;

    const temRenda = rendas.some(renda => renda.valor !== "");
    const temDespesa = despesas.some(despesa => despesa.valor !== "");
    const temSaldo = saldoLiquido !== 0;

    const formatCurrency = (value) => {
        return Number(value).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    };

    
    return (
        <div className="container-historic">
            <h1 className="title">Suas Informações</h1>

            <h2 className="sub-title">Seus Objetivos</h2>
            {objetivos.map((objetivo) => (
                <div className="box-historic" key={objetivo.id}>
                    {temObjetivo && (
                        <div className="box-objetivo">
                            <span>{objetivo.texto}</span>
                            <span>{formatCurrency(objetivo.valor)}</span>
                        </div>
                    )}
                    
                </div>
            ))}
            <h2 className="sub-title">Suas Rendas</h2>
            {rendas.map((renda) => (
                <div className="box-historic" key={renda.id}>
                    {temRenda && (
                        <div className="box-objetivo">
                            <span>{renda.texto}</span>
                            <span>{formatCurrency(renda.valor)}</span>
                        </div>
                    )}
                    
                </div>
            ))}
            {temRenda && (
                <div>
                    <h3 className="sub-title-result">Resultado das Rendas:</h3>
                    <div className="result">
                        <span>{formatCurrency(resultadoRenda.toFixed(2))}</span>
                    </div>
                </div>
            )}
            
            
            <h2 className="sub-title">Suas Despesas</h2>
            {despesas.map((despesa) => (
                <div className="box-historic" key={despesa.id}>
                    {temDespesa && (
                        <div className="box-objetivo">
                            <span>{despesa.texto}</span>
                            <span>{formatCurrency(despesa.valor)}</span>
                        </div>
                    )}
                    
                </div>
            ))}
            {temDespesa && (
                <div>
                    <h3 className="sub-title-result">Resultado das Despesas:</h3>
                    <div className="result">
                        <span>{formatCurrency(resultadoDespesas.toFixed(2))}</span>
                    </div>
                </div>
            )}
            
            {temSaldo && (
                <div>
                    <h3 className="sub-title-result">Saldo Líquido</h3>
                    <div className="result">
                        <span>{formatCurrency(saldoLiquido.toFixed(2))}</span>
                    </div>
                </div>
            )}
            

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


export default HistoricScreen;
