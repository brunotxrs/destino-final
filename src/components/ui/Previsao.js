import '../css/Previsao.css'
import React, { useContext } from "react";
import { Contexts } from '../contexts/Context';

function Previsao() {
    const { objetivos, valorSeparado } = useContext(Contexts);

    const calcularDataConclusao = (mesesEstimados) => {
        if (mesesEstimados === Infinity || isNaN(mesesEstimados)) {
            return 'Indefinido';
        }

        const dataAtual = new Date();
        let mesConclusao = dataAtual.getMonth();
        let anoConclusao = dataAtual.getFullYear();
        let mesesRestantes = Math.ceil(mesesEstimados);

        for (let i = 0; i < mesesRestantes; i++) {
            mesConclusao++;
            if (mesConclusao > 11) {
                mesConclusao = 0;
                anoConclusao++;
            }
        }

        const mesesNomes = [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ];

        return `${mesesNomes[mesConclusao]} de ${anoConclusao}`;
    };

    const formatCurrency = (value) => {
        return Number(value).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    };

    return (
        <div className='container-previsao'>
            <h2>Previsão de Conclusão dos Objetivos:</h2>
            {objetivos.map((objetivo) => {
                const valorObjetivo = parseFloat(objetivo.valor) || 0;
                let resultadoMes;

                if (valorSeparado > 0) {
                    resultadoMes = valorObjetivo / valorSeparado;
                } else {
                    resultadoMes = Infinity;
                }

                const dataConclusao = calcularDataConclusao(resultadoMes);

                return (
                    <div className='box-result' key={objetivo.id}>
                        <div>
                            <span>Objetivo:</span>
                            <span>{objetivo.texto || 'Não definido'}</span>
                        </div>
                        <div>
                            <span>Valor do Objetivo:</span>
                            <span>{formatCurrency(valorObjetivo.toFixed(2))}
                            </span>
                        </div>

                        <div>
                            <span>Valor Separado Mensal:
                            </span>
                            <span>{formatCurrency(valorSeparado.toFixed(2))}
                            </span>
                        </div>

                        <div>
                            <span>Meses Estimados para Conclusão:</span>
                            <span>{resultadoMes === Infinity || isNaN(resultadoMes) ? 'Defina um valor para separação' : resultadoMes.toFixed(0)}</span>
                        </div>

                        <div>
                            <span>Data Estimada de Conclusão:</span>
                            <span> {dataConclusao}</span>
                        </div>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
};

export default Previsao;