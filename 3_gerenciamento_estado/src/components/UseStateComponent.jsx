import { useState } from 'react'

const UseStateComponent = () => {
   // cria uma variável de consulta e uma de alteração, inicio o hook
   //useState = hook;

   //sempre que vamos alterar o valor de algo => useState;
   //quando for somente leitura => variável, state
   const [count, setCount] = useState(0); // Contador
    
    const increment = () => {
        setCount ((prevCount) => prevCount + 1); //Equivalente a count + 1
        // Usado para garantir que se pegou o estado anterior (prev{nome do estado})
        console.log(count);
    };

    const [user, setUser] = useState({
        name: "Marcelo",
        age: 23,
        hobbies: ["Música", "Leitura"]
    });
    const updateUserAge = () => {
        setUser((prevUser) => (
            {
                ...prevUser,
                age: prevUser.age + 1,
            }
        ));
    }

  return (
    <div>
        <h2>Contador</h2>
        <p>Você clicou {count} vezes</p>
        <button onClick={increment}>Incrementar</button>

        <p>
            Nome: {user.name} e idade: {user.age}
        </p>

        <button onClick={updateUserAge}>Incrementar Idade</button>
    </div>
  );
};

export default UseStateComponent;