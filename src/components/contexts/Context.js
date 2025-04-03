import React, { createContext, useState } from "react";


export const Contexts = createContext();


export const ContextsProvider = (props) => {

    const [objetivos , setObjetivos] = useState([
        {id:0, texto:"", valor:""}
    ]);
    const [rendas ,  setRendas] = useState([
        {id:0, texto: "", valor:""}
    ]);
    
    const [nextId , setNextId] = useState(1);

    const handleAddObjetivo = () => {
        setObjetivos([...objetivos, { id: nextId, texto: "", valor: "" }]);
        setNextId(nextId + 1);
    };

    const handleAddRenda = () => {
        setRendas([...rendas, { id: nextId, texto:"", valor: "" }]);
        setNextId(nextId + 1);
    };

    const handleRemoveObjetivo = (idToRemove) => {
        setObjetivos(objetivos.filter(objetivo => objetivo.id !== idToRemove));
    };

    const handleRemoveRenda = (idToRemove) => {
        setRendas(rendas.filter(renda => renda.id !== idToRemove))
    };

    const handleObjetivoChange = (id , field , value) => {
        const novosObjetivos = objetivos.map((objetivo) =>
            objetivo.id === id ? { ...objetivo, [field]: value} : objetivo
        );

        setObjetivos(novosObjetivos);
    };

    const handleRendaChange = (id, field, value) => {
        const novasRendas = rendas.map((renda) => 
        renda.id === id ? { ...renda, [field]: value} : renda
    );

    setRendas(novasRendas);
    };

    return (
        <Contexts.Provider 
        value={{ 
            objetivos, 
            handleAddObjetivo, 
            handleRemoveObjetivo, 
            handleObjetivoChange, 
            rendas, 
            handleAddRenda, 
            handleRemoveRenda, 
            handleRendaChange}}>
                {props.children}
        </Contexts.Provider>
    )

}