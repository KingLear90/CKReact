import React, { useState } from 'react';

function BestMoveApi() {
  const [fen, setFen] = useState('4r1n1/3p4/8/3K1Pp1/3P4/1R1B4/1P3k2/8 b - - 0 1');
  const depth = 18;
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [winChance, setWinChance] = useState(null);

  const handleFenChange = (event) => {
    setFen(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://chess-api.com/v1',
        {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fen, depth, winChance })
        });

      const data = await response.json();
      setResultado(data.text);
      setWinChance(data.winChance);
    } catch (error) {
      console.error(error);
      setResultado('Error al obtener el mejor movimiento');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
        <h4 className='engineFeature'>¡Consultá con Stockfish el mejor movimiento de una determinada posición!</h4>
        <h5>¿Cómo funciona? Es simple: </h5>
        <ol className='instructions'>
            <li>Ingresa el código FEN de la posición a analizar. Por defecto ya hay un FEN escrito para que veas el formato.</li>
            <li>Haz clic en el botón <i>'¿Mejor movimiento?</i>' y espera la respuesta de Stockfish (la demora es de tan solo milisegundos, y Stockfish analizará en profunidad 18, que es la máxima permitida en esta función y que equivale a unos 2750 puntos elo FIDE).</li>
        </ol>
        <div className='engine-datacontainer'>
            <input type="text" className='fen' name='fen' value={fen} onChange={handleFenChange} placeholder="Ingresa el código FEN" />
            <button onClick={handleSubmit} className='engine-btn'>¿Mejor movimiento?</button>
            {loading && <h4 className='calculating'>Calculando...</h4>}
            <div>
            {resultado && <p className='textAnalysis'>El mejor movimiento es: {resultado}</p>} 
            {resultado && <p className='textAnalysis'> La probabilidad de victoria para las blancas es del {winChance.toFixed(2)}%</p>}
            {resultado && <h5 className='interpretation'>¿Cómo interpretar el resultado?
                <h6>
                    <ul className='list-interpretation'>
                        <li>Move 'x' → 'z' expresa que la pieza ubicada en la casilla 'x' debe moverse a la casilla 'z'.</li>
                        <li>(g4), por ejemplo, indica lo mismo que el punto anterior, pero en notación algebraica (en este caso, equivale al movimiento del peón en g5 hacia g4).</li>
                        <li>El siguiente valor, ubicado entre corchetes, indica la evaluación de la posición . Un valor negativo indica que la ventaja es para las negras.</li>
                        <li>Lo siguiente es un breve texto, indicando si están ganando las blancas ('white is winning'), las negras ('black is winning'), o si la posición está equilibrada ('the game is balanced').</li>
                        <li>Por último, puede verse la profundidad de análisis de Stockfish, que en este caso será siempre 18.</li>
                        <li>En el último recuadro aparece la probabilidad de uno u otro bando para ganar. Si el porcentaje es cercano al 50% signfica que la posición está equilibrada. Por encima del 50%, las chances incrementan para las blancas, por debajo de dicho valor, aumentan para las negras.</li>
                    </ul>
                </h6>
            </h5>}
            </div>
        </div>
    </div>
  );
}

export default BestMoveApi;