import React, { createContext, useState } from "react";

export const Contexts = createContext();

export const ContextsProvider = (props) => {
    
    const [objetivos , setObjetivos] = useState([]);
    const [rendas, setRendas] = useState([]);
    const [despesas, setDespesas] = useState([]);
    const [nextId, setNextId] = useState(0);
    const [valorSeparado, setValorSeparado] = useState(0); 
    const [porcentagemSelecionada, setPorcentagemSelecionada] = useState(null);

    const handleAddObjetivo = () => {
        setObjetivos([...objetivos, { id: nextId, texto: "", valor: "" }]);
        setNextId(nextId + 1);
    };

    const handleAddRenda = () => {
        setRendas([...rendas, { id: nextId, texto: "", valor: "" }]);
        setNextId(nextId + 1);
    };

    const handleAddDespesa = () => {
        setDespesas([...despesas, { id: nextId, texto: "", valor: "" }]);
        setNextId(nextId + 1);
    };

    const handleRemoveObjetivo = (idToRemove) => {
        setObjetivos(objetivos.filter(objetivo => objetivo.id !== idToRemove));
    };

    const handleRemoveRenda = (idToRemove) => {
        setRendas(rendas.filter(renda => renda.id !== idToRemove));
    };

    const handleRemoveDespesa = (idToRemove) => {
        setDespesas(despesas.filter(despesa => despesa.id !== idToRemove));
    };

    const handleObjetivoChange = (id , field , value) => {
        const novosObjetivos = objetivos.map((objetivo) =>
            objetivo.id === id ? { ...objetivo, [field]: value} : objetivo
        );

        setObjetivos(novosObjetivos);
    };

    const handleRendaChange = (id, field, value) => {
        
        const novasRendas = rendas.map((renda) =>
            renda.id === id ? { ...renda, [field]: value } : renda
        );
        setRendas(novasRendas);
    };

    const handleDespesaChange = (id, field, value) => {
        
        const novasDespesas = despesas.map((despesa) =>
            despesa.id === id ? { ...despesa, [field]: value } : despesa
        );
        setDespesas(novasDespesas);
    };

    const setValorSeparadoContext = (valor) => {
        setValorSeparado(valor);
    };

    const setPorcentagemSelecionadaContext = (porcentagem) => {
        setPorcentagemSelecionada(porcentagem);
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
                handleRendaChange,
                despesas,
                handleAddDespesa,
                handleRemoveDespesa,
                handleDespesaChange,
                valorSeparado,
                setValorSeparadoContext,
                porcentagemSelecionada,
                setPorcentagemSelecionadaContext, 
                
            }}
        >
            {props.children}
        </Contexts.Provider>
    );
};