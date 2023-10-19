import { useState, useEffect } from 'react';
import './Orologio.css';

const Orologio = () => {

    const now = new Date();
    const [secondi, setSecondi] = useState(now.getSeconds());
    const [minuti, setMinuti] = useState(now.getMinutes());
    const [ore, setOre] = useState(now.getHours());

    const checkOra = () => {

        if(secondi > 59){
            setSecondi(0);
            setMinuti((prevState) => prevState + 1);
            //setMinuti(prevState => prevState + 59);
        }

        if(minuti > 59){
            setMinuti(0);
            setOre((prevState) => prevState + 1);
        }

        if(ore > 23){
            setSecondi(0);
            setMinuti(0);
            setOre(0);
        }
    }

    useEffect(() => {
        console.log(secondi);

        setTimeout(() => setSecondi((prevState) => prevState + 1), 1000);
        checkOra();
    }, [secondi, minuti, ore]);


    return(
        <div className="container">
            <div className="container-ora">
                <span className="ora">{ore} : {minuti} : {secondi}</span>
            </div>
        </div>
        
    );
}

export default Orologio;