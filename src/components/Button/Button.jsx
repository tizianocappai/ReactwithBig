export default function Button(props) {
    const{children, funct} = props // props usate x comunicazione padre-figlio, funct è la function passata dal padre

    // la function stampa vieene seguita dal padre essendo passata come callback quando viene eseguita funct
    const stampa = () => {
        console.log("child function");
      };

    return(
        <button onClick={() => funct(stampa)}>{children}</button> // eseguo la funzione passata come param dal padre
    );
}