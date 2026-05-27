import { useState, useEffect}  from 'react'

const UseEffectExample = () => {
    //ativa a re-renderização
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    // Sem dependências
    //Roda com qualquer coisa que tiver renderização
    useEffect(() => {
        console.log("Rodou UE1");
    });
    //com dependências vazias ou arrays de dependência vazios
    //Bom para chamar uma API
    useEffect(() => {
        console.log("Rodou o UE2");
    }, []);
    //com dependências 
    //Só roda atrelado a um determinado state
    useEffect(() => {
        console.log("Rodou UE3")
    }, [count]);
  

  return (
    <div>
        <p>{count}</p>
        <button onClick={() => setCount (count + 1)}>Aumentar contagem</button>
        <button onClick={() => setCount2 (count + 1)}>Aumentar contagem</button>
    </div>
  );
};

export default UseEffectExample;