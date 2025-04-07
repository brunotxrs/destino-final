import { useContext } from "react";
import "../css/Input.css"
import { Contexts } from "../contexts/Context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";



function DespesaInput() {
    const {
        despesas, 
        handleAddDespesa, 
        handleRemoveDespesa, 
        handleDespesaChange
    } = useContext(Contexts)


    return(
        <div className="container-input-mobile">

            <form className="box-input-mobile">

                <fieldset className="box-fieldset">
                    <legend className="legend">Despesas</legend>

                    {despesas.map((despesa)=> (
                        <label className="label" key={despesa.id}>
                            <input className="input" type="text" 
                            placeholder="ex: Luz"
                            autoComplete="off" 
                            value={despesa.texto}
                            onChange={(g) => 
                                handleDespesaChange(despesa.id, "texto", g.target.value)
                            }/>

                            <input className="input-number" type="number" 
                            placeholder="Valor"
                            autoComplete="off" 
                            value={despesa.valor}
                            onChange={(g) => 
                                handleDespesaChange(despesa.id, "valor", g.target.value)
                            }/>

                            <div className="box-icon-input-mobile">  
                                <span className="icon-minus"onClick={() => handleRemoveDespesa(despesa.id)}><FontAwesomeIcon icon={faMinus} />
                                </span>
                            </div>

                        </label>

                    ))}


                    <div className="add-more-mobile">
                        <span className="icon-plus"
                        onClick={handleAddDespesa}>
                            <FontAwesomeIcon icon={faPlus} />
                        </span>
                    </div>

                </fieldset>

            </form>

        </div>

    );
};


export default DespesaInput;