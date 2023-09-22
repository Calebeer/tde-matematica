import { useState } from 'react';
import styles from './Atv1.module.css'
import Botao from '../../layout/Botao';
import MsgBotao from '../../layout/MsgBotao';

function Atv7(){

    const[valueA, setValueA] = useState('')
    const[valueB, setValueB] = useState('')
    const[valueN, setValueN] = useState('')
    const[valueA1, setValueA1] = useState('')
    const[valueB1, setValueB1] = useState('')
    const[valueN1, setValueN1] = useState('')
    const[resultadoB, setResultadoB] = useState()
    const[resultadoA, setResultadoA] = useState()
    const[show, setShow] = useState(false);


    function submitFormA(e){
        e.preventDefault();
    }

    function handleChangeA(e){
        setValueA(e.target.value)
        console.log(valueA);
    }

    function handleChangeB(e){
        setValueB(e.target.value)
        console.log(valueB);
    }

    function handleChangeN(e){
        setValueN(e.target.value)
        console.log(valueN);
    }

    function press(){
        setShow(!show)
    }

    function enviouA(){
        
        const result = calcularTeoremaBinomial(valueA,valueB,valueN)
        setResultadoA(result)

    }

    function handleChangeA1(e){
        setValueA1(e.target.value)
        console.log(valueA1);
    }

    function handleChangeB1(e){
        setValueB1(e.target.value)
        console.log(valueB1);
    }

    function handleChangeN1(e){
        setValueN1(e.target.value)
        console.log(valueN1);
    }

    function letraB(){
        const resultadoPotencia = Math.pow(valueA1 + valueB1, valueN1);
        setResultadoB(resultadoPotencia)
    }



    function calcularTeoremaBinomial(a, b, n) {
        if (n < 0) {
          return "n deve ser um número não negativo";
        }
      
        // Função para calcular o coeficiente binomial C(n, r)
        function calcularCoeficienteBinomial(n, r) {
          if (r < 0 || r > n) {
            return 0;
          }
          if (r === 0 || r === n) {
            return 1;
          }
      
          let coeficiente = 1;
          for (let i = 1; i <= r; i++) {
            coeficiente *= (n - i + 1) / i;
          }
          return coeficiente;
        }
      
        let resultado = 0;
        for (let r = 0; r <= n; r++) {
          resultado += calcularCoeficienteBinomial(n, r) * Math.pow(a, n - r) * Math.pow(b, r);
        }
      
        return resultado;
      }

return(
    <div>
        <h3>7ª Questão:</h3>
        <p>
        <strong>Entrada: Valores para a, b e n
        Saída: Valor de (a + b) elevado a n</strong>         
        </p>
        <strong>A)</strong> Use o teorema binomial para calcular o resultado.
        <br/><br/>
        <div className={styles.container} >
            <form onSubmit={submitFormA} >
                <label>Digite uns números:</label>
                <div className={styles.container2} >
                    <input className={styles.inputs} onChange={handleChangeA} placeholder=" Digite o valor de a" ></input>
                    <input className={styles.inputs} onChange={handleChangeB} placeholder="Digite o valor de b" ></input>
                    <input className={styles.inputs} onChange={handleChangeN} placeholder="Digite o valor de n" ></input>
                    <button className={styles.buttons} onClick={enviouA}  type="button">Verificar</button>
                </div>
            </form>
        </div>
        <div className={styles.retorno} >
            <p>Retorno:</p>
            <h4>
                {resultadoA}
            </h4>
        </div>
        <br/>
         <strong>B)</strong>  Calcule a + b e eleve este valor à n-ésima potência, compare sua resposta com a parte (a).
         <br/>
         <br/>
        <div className={styles.container} >
            <form  >
                <label>Digite uns números:</label>
                <div className={styles.container2} >
                    <input className={styles.inputs} onChange={handleChangeA1} placeholder=" Digite o valor de a" ></input>
                    <input className={styles.inputs} onChange={handleChangeB1} placeholder="Digite o valor de b" ></input>
                    <input className={styles.inputs} onChange={handleChangeN1} placeholder="Digite o valor de n" ></input>
                    <button className={styles.buttons} onClick={letraB}   type="button">Verificar</button>
                </div>
            </form>
        </div>
        <div className={styles.retorno} >
            <p>Retorno:</p>
            <h4>
               {resultadoB} 
            </h4>
        </div>
        <Botao funcao={press} />
            {show && <MsgBotao msg={<p>O objetivo deste problema é calcular o resultado da expressão "(a + b) elevado a n" com base em três valores de entrada: "a", "b" e "n". Essa expressão representa uma operação de potenciação, onde "(a + b)" é elevado à potência "n".
<br></br><br></br>
Aqui estão os elementos-chave deste problema:
<br></br><br></br>
1 - <strong>Entrada de Valores:</strong>  O problema requer três valores como entrada: "a", "b" e "n". O valor "a" é a base da potência, o valor "b" é um termo que será somado à base, e "n" é o expoente ao qual a expressão será elevada.
<br></br><br></br>
2 - <strong>Operação de Potenciação:</strong>  O objetivo principal é calcular o valor resultante da operação de potenciação "(a + b) elevado a n". Isso envolve multiplicar a expressão "(a + b)" por ela mesma "n" vezes.
<br></br><br></br>
3 - <strong>Cálculo de (a + b)^n:</strong>  O algoritmo ou fórmula apropriada deve ser usado para calcular o resultado da potência. Isso geralmente envolve a expansão da expressão usando as propriedades da potenciação.
<br></br><br></br>
4 - <strong>Saída Desejada:</strong>  A saída desejada é o valor numérico da expressão "(a + b) elevado a n".

Essa operação de potenciação é fundamental em matemática e é amplamente aplicada em várias áreas, incluindo física, engenharia, estatísticas e ciência da computação. Ela é usada para modelar fenômenos naturais, calcular probabilidades, realizar análises estatísticas e resolver uma variedade de problemas em ciência e engenharia.</p>} /> }
    </div>
)
}

export default Atv7;