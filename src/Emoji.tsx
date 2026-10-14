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

    const [status, setStatus] = useState<EMOJI_KEYS>("happy")

    function happyClick() {
        setStatus("happy");
    }
    function sickClick() {
        setStatus("sick");
    }
    function deadClick() {
        setStatus("dead");
    }
    function cicleClick() {
        switch (status) {
            case "dead":
                setStatus("happy");
                break;
            case "happy":
                setStatus("sick");
                break;
            case "sick":
                setStatus("dead");
                break;
            default:
                setStatus("happy");
        }
    }

    return (
        <>
            <div className="emoji">
                {EMOJI_MAP.get(status) || "🫥"}
            </div>
            <Atributo icone="❤️" />
            <Atributo icone="🔋" />
            <Atributo icone="💧" />
            <Atributo icone="🍗" />
            <div className="acoes">
                <button onClick={happyClick}>Happy</button>
                <button onClick={sickClick}>Sick</button>
                <button onClick={deadClick}>Dead</button>
                <button onClick={cicleClick}>Cicle</button>
            </div>
        </>
    );
}