import React, { useContext } from "react";

import '../css/ObjetivoInput.css'
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
        <div className="container-objetivo">

            <form className="box-objetivo">

                <fieldset className="box-fieldset">
                    
                <legend>Objetivos & Metas </legend>
                    {objetivos.map((objetivo) => (
                        <label for="" key={objetivo.id}>
                        <input type="text"  placeholder="Objetivos"
                        autoComplete="off"
                        value={objetivo.texto}
                        onChange={(e) => handleObjetivoChange(objetivo.id, 'texto', e.target.value)}
                        />

                        <input type="number" placeholder="Valor R$"
                        autoComplete="off"
                        value={objetivo.valor}
                        onChange={(e) => handleObjetivoChange(objetivo.id, 'valor', e.target.value)}
                        />

                        <div className="box-icon">  
                            <span className="icon-minus" onClick={() => handleRemoveObjetivo(objetivo.id)}>
                                <FontAwesomeIcon icon={faMinus} />
                            </span>
                        </div>

                        
                        
                    </label>
                    ))}

                    <div className="add-more">
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