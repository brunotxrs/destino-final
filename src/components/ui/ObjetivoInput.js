import React, { useContext } from "react";

import '../css/Input.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Contexts } from "../contexts/Context";

import { NumericFormat } from "react-number-format";

function ObjetivoInput() {
    const {
        objetivos, 
        handleAddObjetivo, 
        handleRemoveObjetivo, 
        handleObjetivoChange } = useContext(Contexts);

    console.log("Estado dos objetivos no BotaoPrincipal:", objetivos);

    return (
        <div className="container-input-mobile">

            <form className="box-input-mobile">

                <fieldset className="box-fieldset">
                    
                <legend className="legend">Objetivos & Metas </legend>

                    {objetivos.map((objetivo) => (
                        <label className="label" for="" key={objetivo.id}>
                        <input className="input" type="text"  placeholder="Objetivos"
                        autoComplete="off"
                        value={objetivo.texto}
                        onChange={(e) => handleObjetivoChange(objetivo.id, 'texto', e.target.value)}
                        />

                        <NumericFormat 
                        className="input-number" 
                        placeholder="Valor" 
                        value={objetivo.valor} 
                        onValueChange={(values) => {
                            const {value} = values ;
                            handleObjetivoChange(objetivo.id, 'valor', value);
                        }}
                        decimalSeparator="," 
                        thousandSeparator="." 
                        prefix="R$ " 
                        decimalScale={2} 
                        fixedDecimalScale={true} 
                        allowLeadingZeros={false} 
                        valueIsNumericString={true}

                        />

                        <div className="box-icon-input-mobile">  
                            <span className="icon-minus" onClick={() => handleRemoveObjetivo(objetivo.id)}>
                                <FontAwesomeIcon icon={faMinus} />
                            </span>
                        </div>

                        
                        
                    </label>
                    ))}

                    <div className="add-more-mobile">
                        <span className="icon-plus" onClick={handleAddObjetivo}>
                            <FontAwesomeIcon icon={faPlus} />
                        </span>
                    </div>
                </fieldset>

            </form>
        </div>
    );

};

export default ObjetivoInput;