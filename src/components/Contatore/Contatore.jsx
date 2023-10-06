import { useState } from "react";

export default function Contatore() {

    //let contatore = 0;
    const [contatore, setContatore] = useState(0); //inizializzo variabile a 0
    
    
    const incrementa = () =>{
        //contatore = contatore+1;
        setContatore(prevState => prevState + 1);

    }

    const decrementa = () =>{
        //contatore = contatore-1;
        setContatore(prevState => prevState - 1);

    }

    return (
        <> {/* JSX fragment */}

        <span>{contatore}</span>

        <button onClick={incrementa}>+</button>  <button onClick={decrementa}>-</button>
        </>
    );
} 