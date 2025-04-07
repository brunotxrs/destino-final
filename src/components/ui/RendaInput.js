import React, { useContext } from "react";
import '../css/Input.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Contexts } from "../contexts/Context"
import { NumericFormat } from "react-number-format";


function RendaInput() {
    const {
        rendas, 
        handleAddRenda, 
        handleRemoveRenda, 
        handleRendaChange} = useContext(Contexts)

        console.log("Estado das renda no RendaInput", rendas);


    return (
        <div className="container-input-mobile">
            <form className="box-input-mobile">

                <fieldset className="box-fieldset">
                    <legend className="legend">Rendas $</legend>

                    {rendas.map((renda) => (

                        <label className="label" for="" key={renda.id}>
                            <input className="input" type="text"  placeholder="Ex: Salário"
                            autoComplete="off"
                            value={renda.texto}
                            onChange={(f) => 
                                handleRendaChange(renda.id, 'texto', f.target.value)
                            }
                            />
                    
                            <NumericFormat 
                            className="input-number" 
                            placeholder="Valor" 
                            value={renda.valor} 
                            onValueChange={(values) => {
                            const {value} = values ;
                            handleRendaChange(renda.id, 'valor', value);
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
                                <span className="icon-minus"
                                onClick={() => 
                                    handleRemoveRenda(renda.id)
                                }><FontAwesomeIcon icon={faMinus} />
                                </span>
                            </div>
                                  
                        </label>

                    ))}


                    

                     <div className="add-more-mobile">
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