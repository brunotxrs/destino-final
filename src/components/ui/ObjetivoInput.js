import React, { useContext } from "react";

import '../css/Input.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Contexts } from "../contexts/Context"; 

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

                        <input className="input-number" type="number" placeholder="R$ ex: 1000.00"
                        autoComplete="off"
                        value={objetivo.valor}
                        onChange={(e) => handleObjetivoChange(objetivo.id, 'valor', e.target.value)}
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