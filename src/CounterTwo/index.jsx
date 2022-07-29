import useCounter from "../hooks/useCounter";

/*
 * Ahora un detalle a recalcar
 * es que como vemos estamos usando nuestro useCounter
 * no solamente en este componente, si no en Counter.
 * ¿Pero eso quiere decir que value tomara el estado de alguno
 * de los componentes o va a colapsar por la sustitución de
 * valore?
 *
 * Pues no, porque cuando hacemos la instancia de useCounter,
 * lo que pasa internamente es que reserva ese espacio en memoria
 * especificamente para ese componente, asi que el valor value
 * es especificamente para el componente CounterTwo es por eso
 * que no hay problema con trabajar asi.
 */

const CounterTwo = () => {
  const { value, handleIncrement, handleDecrement } = useCounter();

  return (
    <div>
      <div>
        <p>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen
        </p>
        <img src="https://dummyimage.com/600x400/000/fff" alt="Sample" />
      </div>
      <div>
        <h2>{value}</h2>
        <button onClick={handleDecrement}>Previos</button>
        <button onClick={handleIncrement}>Next</button>
      </div>
    </div>
  );
};

export default CounterTwo;
