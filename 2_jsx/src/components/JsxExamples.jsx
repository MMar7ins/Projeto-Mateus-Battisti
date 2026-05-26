import React from 'react'

const JsxExamples = () => {

    const userName = "Marcelo";
    const user = {
        name: "Marcelo",
        lastName: "Araujo",
    };

    function getGreeting(name) {
        return `Olá ${name}`;     //usando crase, não é aspas simples;
    }

    const userIsLoggedIn = true;  //trocar para falso

    const userRole = "admin"

    const users = [
        {id: 1, name: "Marcelo" },
        {id: 2, name: "Mariane" },
        {id: 3, name: "Fernanda"},
    ];

  return (
    <div>
        {/* Básico */}
        <h2>Conteúdo que o usuário vai ver</h2>
        {/* Listando dados do usuário */}
        <p>O nome do usuário é {userName}</p>
        <p>Usuário: {user.name} {user.lastName}</p>
        <p>{getGreeting(userName)}</p>

        {/* Diferenças do html */}
        <div className="alguma-coisa">Este cara</div>
        <div className="teste">Ok</div>
        
        <button onClick={() => alert("Teste")}>Cilque em mim</button>
        <input type="text" placeholder="Digite algo" />

        {/* Renderização condicional */}
        {userIsLoggedIn ? (
            <p>Caso: Está logado</p>
            ) : (
            <p>Caso: Não está logado</p>
            ) }
            {/* Imprime só se for admin */}
        <p>{userRole==="admin" && "Você é um admin"}</p>  
        {/* Renderização de listas */}
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.id} - {user.name}
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default JsxExamples