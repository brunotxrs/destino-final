import React, { useContext, useState } from "react";
import '../css/PlanejamentoScreen.css';
import ResultadoRenda from "../ui/ResultadoRenda";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Contexts } from '../contexts/Context';
import { NumericFormat } from "react-number-format";

function PlanejamentoScreen() {
    const { rendas, despesas, valorSeparado, setValorSeparadoContext, setPorcentagemSelecionadaContext } = useContext(Contexts);
    const [valorPersonalizado, setValorPersonalizado] = useState('');
    const navigation = useNavigate();
    const [selectedPercentageLocal, setSelectedPercentageLocal] = useState(null);

    const resultadoRenda = rendas.reduce((abb, renda) => {
        const valorNumerico = parseFloat(renda.valor) || 0;
        return abb + valorNumerico;
    }, 0);

    const resultadoDespesas = despesas.reduce((acc, despesa) => {
        const valorNumerico = parseFloat(despesa.valor) || 0;
        return acc + valorNumerico;
    }, 0);

    const saldoLiquido = resultadoRenda - resultadoDespesas;

    const handleBackClick = () => {
        navigation('/historic-screen');
    };

    const handleNextScreen = () => {
        navigation('/previsao-conclusao-objetivo')
    }

    const handlePercentageChange = (event) => {
        const percentageValue = event.target.value;
        setSelectedPercentageLocal(percentageValue);
        setValorPersonalizado('');
        setPorcentagemSelecionadaContext(percentageValue);
        let valorSeparadoCalculado = 0;
        switch (percentageValue) {
            case 'ten':
                valorSeparadoCalculado = saldoLiquido * 0.10;
                break;
            case 'twenty':
                valorSeparadoCalculado = saldoLiquido * 0.20;
                break;
            case 'thirty':
                valorSeparadoCalculado = saldoLiquido * 0.30;
                break;
            case 'forty':
                valorSeparadoCalculado = saldoLiquido * 0.40;
                break;
            default:
                valorSeparadoCalculado = 0;
        }
        setValorSeparadoContext(valorSeparadoCalculado);
    };

    const handleValorPersonalizadoChange = (values) => {
        const { value } = values; // 'value' é a string formatada
        setSelectedPercentageLocal(null);
        setValorPersonalizado(value);
        setPorcentagemSelecionadaContext(null);
        const valorNumerico = value ? parseFloat(value.replace(',', '.')) : 0;
        setValorSeparadoContext(valorNumerico);
        console.log("Valor Personalizado (estado):", value); // Log do valor atualizado
        console.log("Valor Separado (contexto):", valorNumerico);
    };

    const formatCurrency = (value) => {
        return Number(value).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    };

    const temValorSeparado = valorSeparado !== 0;

    return (
        <div className="container-planejamento">
            <div className="box-planejamento">
                <h1>Planejamento</h1>
                <p className="box-paragraph">Defina a base do seu planejamento. 
                Você pode escolher uma porcentagem ou inserir um valor personalizado.</p>
                <ResultadoRenda />
            </div>

            <div className="box-section">
                <label htmlFor="ten">
                    <span>10%</span>
                    <div className="box-input">
                        <input type="radio"
                            id="ten"
                            value="ten"
                            name="percent"
                            checked={selectedPercentageLocal === 'ten'}
                            onChange={handlePercentageChange}
                        />
                    </div>
                </label>
                <label htmlFor="twenty">
                    <span>20%</span>
                    <div className="box-input">
                        <input type="radio"
                            id="twenty"
                            value="twenty"
                            name="percent"
                            checked={selectedPercentageLocal === 'twenty'}
                            onChange={handlePercentageChange}
                        />
                    </div>
                </label>
                <label htmlFor="thirty">
                    <span>30%</span>
                    <div className="box-input">
                        <input type="radio"
                            id="thirty"
                            value="thirty"
                            name="percent"
                            checked={selectedPercentageLocal === 'thirty'}
                            onChange={handlePercentageChange}
                        />
                    </div>
                </label>
                <label htmlFor="forty">
                    <span>40%</span>
                    <div className="box-input">
                        <input type="radio"
                            id="forty"
                            value="forty"
                            name="percent"
                            checked={selectedPercentageLocal === 'forty'}
                            onChange={handlePercentageChange}
                        />
                    </div>
                </label>
            </div>

            <div className="box-section-custom-value">

                <label htmlFor="valor-customizado">
                    <span>Defina um Valor (R$)</span>

                    <NumericFormat 
                        id="valor-customizado"
                        className="input-custom-value"
                        placeholder="Valor"
                        autoComplete="off" 
                        value={valorPersonalizado} 
                        onValueChange={handleValorPersonalizadoChange}
                        decimalSeparator="," 
                        thousandSeparator="." 
                        prefix="R$ " 
                        decimalScale={2} 
                        fixedDecimalScale={true} 
                        allowLeadingZeros={false} 
                        valueIsNumericString={true}

                    />
                </label>
            </div>

            
            {temValorSeparado && (
                <div className="box-calculation">
                    <h3>Valor a ser separado:
                        <span>({selectedPercentageLocal ? selectedPercentageLocal.replace('ten', '10%').replace('twenty', '20%').replace('thirty', '30%').replace('forty', '40%') : valorPersonalizado ? 'Personalizado' : '0%'})
                        </span>
                    </h3>
                    <p>
                        {formatCurrency(valorSeparado)}
                    </p>
                </div>
            )}

            <div className="box-icone-mobile">
                <span className="ico-mobile" onClick={handleBackClick}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </span>
                <span className="ico-mobile"
                onClick={handleNextScreen}
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                </span>
            </div>

        </div>
    );
}

export default PlanejamentoScreen;