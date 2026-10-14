import { useState } from "react";
import "./Atributo.css";
type AtributoProps ={
    icone: string;
}
export default function Atributo({icone}:AtributoProps) {
    const [valor, setValor] = useState<number>(0)
    
    return (
        <div className="atributo">
            {valor}{icone.repeat(valor)}<span className="inativo">{icone.repeat(5-valor)}</span>
            <button onClick={() => {
                setValor(valor === 5 ? 0 : valor + 1);
            }}>+</button>
        </div>
    );
}