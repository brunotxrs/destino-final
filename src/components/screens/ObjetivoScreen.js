import React from "react";
import ObjetivoInput from "../ui/ObjetivoInput";
import RendaInput from "../ui/RendaInput";
import DespesaInput from "../ui/DespesaInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


function ObjetivoScreen() {

    const navigation = useNavigate()

    const handleClick = () => {
        
        navigation('/renda-screen')

    }

    const handleClickDesktop = () => {
        navigation('/historic')
    }

    return (
        <div>
            <div className="container-screen-mobile">
                <div className="info-mobile">
                    <h1 className="title-mobile">
                        Descreva seus objetivos e as metas que deseja alcançar.
                    </h1>
                    <p>
                        <span className="span-mobile">
                            (ex: "Comprar um carro")
                        </span>
                    </p>
                </div>
                <ObjetivoInput />
                <div className="box-icone-mobile">
                    <span className="ico-mobile"
                    onClick={handleClick}><FontAwesomeIcon
                    icon={faArrowRight} />
                    </span>
                </div>
            </div>

            <div className="container-screen-desktop">

                <div className="box-screen-desktop">
                    <div className="box">
                        <div className="box-info">
                            <h1>Descreva seus objetivos e as metas que deseja alcançar.</h1>
                            <p>(ex: "Comprar um carro")</p>
                        </div>
                        <ObjetivoInput />
                    </div>
                    <div className="box">
                        <div className="box-info">
                            <h1>Qual a sua renda?</h1>
                            <p>
                                (ex: "Salário, outros ganhos")
                            </p>
                        </div>
                        <RendaInput />
                    </div>
                    <div className="box">
                        <div className="box-info">
                            <h1>Descreva suas despesas!</h1>
                            <p>(ex: "Luz, Internet e outros")</p>
                        </div>
                        <DespesaInput />
                    </div>
                </div>


                <div className="box-icone-mobile">
                    <span className="ico-mobile"
                    onClick={handleClickDesktop}><FontAwesomeIcon
                    icon={faArrowRight} />
                    </span>
                </div>

            </div>

            
        </div>

    );
};

export default ObjetivoScreen;