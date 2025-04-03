import React, { useContext } from "react";
import '../css/RendaInput.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Contexts } from "../contexts/Context"


function RendaInput() {
    const {
        rendas, 
        handleAddRenda, 
        handleRemoveRenda, 
        handleRendaChange} = useContext(Contexts)

        console.log("Estado das renda no RendaInput", rendas);


    return (
        <div className="container-renda">
            <form className="box-renda">

                <fieldset className="box-fieldset">
                    <legend>Rendas $</legend>

                    {rendas.map((renda) => (

                        <label for="" key={renda.id}>
                            <input type="text"  placeholder="Ex: Salário"
                            autoComplete="off"
                            value={renda.texto}
                            onChange={(f) => 
                                handleRendaChange(renda.id, 'texto', f.target.value)
                            }
                            />
                    
                            <input type="number" placeholder="Valor R$"
                            autoComplete="off"
                            value={renda.valor}
                            onChange={(f) => 
                                handleRendaChange(renda.id, 'valor', f.target.value)
                            }
                            />
                    
                            <div className="box-icon">  
                                <span className="icon-minus"
                                onClick={() => 
                                    handleRemoveRenda(renda.id)
                                }><FontAwesomeIcon icon={faMinus} />
                                </span>
                            </div>
                                  
                        </label>

                    ))}


                    

                     <div className="add-more">
                        <span className="icon-plus"
                        onClick={handleAddRenda}>
                            <FontAwesomeIcon icon={faPlus} />
                        </span>
                    </div>

                </fieldset>
            </form>

        </div>
    );
};

export default RendaInput;