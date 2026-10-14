import { useState } from "react";
import "./Emoji.css";
import Atributo from "./Atributo";

type EMOJI_KEYS = "happy" | "sick" | "dead";
const EMOJI_MAP = new Map<EMOJI_KEYS, string>([
    ["happy", "🙂"],
    ["sick", "🤢"],
    ["dead", "😵"],
]);



export default function Emoji() {
    const [comida, setComida] = useState(2);
    const [agua, setAgua] = useState(2);
    const [luz, setLuz] = useState(false);
    const [saude, setSaude] = useState(5);
    const [energia, setEnergia] = useState(5);


    function alimentarClick() {
        setComida(Math.min(5, comida + 1));
    }
    function hidratarClick() {
        setAgua(Math.min(5, agua + 1));
    }
    function alternarLuzClick() {
        setLuz(!luz);
    }
    function cicloClick() {
        setComida(Math.max(0, comida - 1));
        if(comida === 0) setSaude(Math.min(0, saude - 1));
        setAgua(Math.max(0, agua - 1));
        if(agua === 0) setSaude(Math.max(0, saude - 1));
        if(luz) {
            setEnergia(Math.max(0, energia - 1));
            if(energia === 0) setSaude(Math.max(0, saude - 1));
        }
    }

    let status = EMOJI_MAP.get("happy");
    if(energia === 0 || comida === 0 || agua === 0) {
        status = EMOJI_MAP.get("sick");
    } else {
        status = EMOJI_MAP.get("happy");
    }
    if(saude === 0) status = EMOJI_MAP.get("dead");

    return (
        <>
            <div className="emoji">
                {status}
            </div>
            <Atributo icone="❤️" valor={saude}/>
            <Atributo icone="🔋" valor={energia}/>
            <Atributo icone="💧" valor={agua}/>
            <Atributo icone="🍗" valor={comida}/>
            {luz && "💡"}
            <div className="acoes">
                <button onClick={alimentarClick}>Alimentar</button>
                <button onClick={hidratarClick}>Hidratar</button>
                <button onClick={alternarLuzClick}>Ligar Luz</button>
                <button onClick={cicloClick}>Ciclo</button>
            </div>
        </>
    );
}