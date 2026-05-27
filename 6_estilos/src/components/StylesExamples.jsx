import React from 'react'
import "./StylesExamples.css"
import styles from "./StylesExamples.module.css"

const StylesExamples = () => {

    //inline (não deveria ser usado)
    const inlineStyle = {
        color: "blue",
        fontsize: "20px",
    };



  return (
    <div>
        <h2 style={inlineStyle}>Estilos inline</h2>

        {/* arquivo de estilos */}
        {/* Ruim: essse estilo vai vazar para todos os componentes dessa pasta, geralmente, algo a ser evitado */}
        <p className="text">Meu CSS</p>

        {/* CSS Modules */}
        {/* Não vaza para os demais componentes */}
        <p className={styles.textPurple}>Meu CSS modules</p>
    </div>
  );
};

export default StylesExamples;