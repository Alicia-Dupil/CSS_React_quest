import React from "react";
import celeste from "./celesteAC.webp";
import './style.scss'

function App() {
    return(
    <>
    <h1>Celeste</h1>
    <img src={celeste} alt="portrait of celeste"/>
    <h2>Presentation</h2>
    <p>Céleste (フーコ, Fūko en japonais) est un hibou apparaissant dans la série Animal Crossing. Son nom est probablement inspiré du mot "céleste", en référence à la fonction qu'elle exerce dans le musée et à sa passion. La phrase de sa photo est "Dors le jour ou dors la nuit, mais rêve tout le temps.".</p>
    </>
    );
}

export default App;