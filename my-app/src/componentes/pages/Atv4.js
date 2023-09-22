import { useState } from 'react';
import styles from './Atv1.module.css'
import Botao from '../../layout/Botao';
import MsgBotao from '../../layout/MsgBotao';


function Atv4(){
    
    const[valorN, setValorN] = useState('')
    const[valorR, setValorR] = useState('')
    const[resultado, setResultado] = useState()
    const[show, setShow] = useState(false)

    function submitForm(e){
        e.preventDefault()
    }

    function handleChangeR(e){
        setValorR(e.target.value)
        console.log(valorR);
    }

    function press(){
        setShow(!show)
    }

    function handleChangeN(e){
        setValorN(e.target.value)
        console.log(valorN);
    }

    function enviou(){
        const n = valorN;
        const r = valorR;

        const result = calcularPermutacao(n,r);
        setResultado(result)

    }

    function calcularPermutacao(n, r) {
        if (n < r) {
          return "r deve ser menor ou igual a n";
        }
      
        // Função para calcular o fatorial de um número
        function fatorial(num) {
          if (num === 0) {
            return 1;
          }
          return num * fatorial(num - 1);
        }
      
        const permutacao = fatorial(n) / fatorial(n - r);
        return permutacao;
      }
    
    return(
        <div>
            <h3>4ª Questão:</h3>
            <p>
            <strong>Entrada: Valores para n e r, 0 ≤ r ≤ n
            Saída: Valor de P(n, r)</strong>
            </p>
            <div className={styles.container} >
                <form onSubmit={submitForm} >
                    <label>Digite os valores de n e r:</label>
                    <div className={styles.container2} >
                        <input className={styles.inputs} onChange={handleChangeN} placeholder="Valor de n" ></input>
                    
                        <input className={styles.inputs} onChange={handleChangeR} placeholder="Valor de r" ></input>
                        <button className={styles.buttons} onClick={enviou}  type="button">Executar</button>
                    </div>
                </form>
            </div>

            <div className={styles.retorno} >
                <p>Retorno: <strong>{resultado}</strong> </p>
            </div>
            <Botao funcao={press} />
            {show && <MsgBotao msg={<p>O objetivo deste problema está relacionado à matemática combinatória e à necessidade de calcular as combinações possíveis entre um conjunto de elementos. Especificamente, o problema visa calcular o valor de uma função denominada "P(n, r)" com base em dois valores de entrada: "n" e "r", sujeitos à condição de que "r" deve ser maior ou igual a zero e menor ou igual a "n".
<br></br><br></br>
Aqui estão os elementos-chave deste problema:
<br></br><br></br>
1 - Entrada de Valores: O problema requer dois valores como entrada: "n" e "r". O valor "n" representa o tamanho total do conjunto, enquanto "r" representa o número de elementos a serem escolhidos a partir desse conjunto para formar uma combinação.
<br></br><br></br>
2 - P(n, r): A função "P(n, r)" representa o número de maneiras diferentes de escolher "r" elementos de um conjunto de tamanho "n", onde a ordem dos elementos escolhidos não importa. Isso é conhecido como uma combinação.
<br></br><br></br>
3 - Restrições de Valores: As restrições "0 ≤ r ≤ n" significam que o valor de "r" deve ser maior ou igual a zero (não pode ser negativo) e também deve ser menor ou igual a "n" (não pode ser maior do que o tamanho total do conjunto).
<br></br><br></br>
Saída Desejada: O objetivo final deste problema é calcular e fornecer como saída o valor numérico de "P(n, r)", que representa o número de combinações possíveis.</p>} /> }
        </div>
    )
}

export default Atv4;


