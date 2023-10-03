export default function Button(props) {
    const{children} = props // utilizziamo props come comunicazione tra padre e figlio

    function stampa(){
        console.log('HAI CLICCATO');
    }

    return(
        <button onClick={stampa}>{children}</button>
    );
}