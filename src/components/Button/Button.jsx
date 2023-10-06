export default function Button(props) {
    const{children, funct} = props // props usate x comunicazione padre-figlio, funct è la function passata dal padre

    let log = "prova stampa ";
   
    const stampa = () => {
        funct(log);
      };

    return(
        <button onClick={stampa}>{children}</button> // eseguo la funzione passata come param dal padre
    );
}