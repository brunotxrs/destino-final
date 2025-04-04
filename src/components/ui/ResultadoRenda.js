import React, { useContext } from "react";
import { Contexts } from "../contexts/Context"
import "../css/ui.css"

function ResultadoRenda() {
    const { rendas, despesas } = useContext(Contexts);

    const resultadoRenda = rendas.reduce((abb, renda) => {
        const valorNumerico = parseFloat(renda.valor) || 0;
        return abb + valorNumerico;
    }, 0);

    const resultadoDespesas = despesas.reduce((acc, despesa) => {
        const valorNumerico = parseFloat(despesa.valor) || 0;
        return acc + valorNumerico
    }, 0);

    const saldoLiquido = resultadoRenda - resultadoDespesas;
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


        <div className="container-resultado-renda">
            {temSaldo && (
                <div className="box">
                    <h3 className="sub-title-result">Saldo Líquido</h3>
                    <span>{formatCurrency(saldoLiquido)}</span>
                </div>
            )}
            
        </div>

    );
};


export default ResultadoRenda;