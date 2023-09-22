import Botao from '../../layout/Botao';
import MsgBotao from '../../layout/MsgBotao';
import styles from './Atv1.module.css'
import { useState } from "react";

function Atv1(){
    
    const [formData,setFormData] = useState('');
    const [transformArray, setTransformArray] = useState([]);
    const [resultado, setResultado] = useState([]);
    const[show, setShow] = useState(false)

    function submitForm(e){
        e.preventDefault();
    }

    const enviou = () => {
        console.log(formData);
        const parsedArray = formData.split(',').map((e) => parseInt(e));
        setTransformArray(parsedArray);
        console.log(transformArray);
        const result = generatePowerSet(parsedArray);
        setResultado(result);
        console.log(resultado);
        const elementosEmStrings = resultado.map(String);
        const stringFinal = elementosEmStrings.join(', ');  
        console.log(stringFinal);
    };

    function handleChange(e){
        setFormData(e.target.value);
    }

    function press(){
        setShow(!show)
        console.log(show);
    }

    function generatePowerSet(S) {
        // Função auxiliar recursiva para gerar os subconjuntos
        function generateSubsetsHelper(index, currentSubset) {
            // Caso base: Quando chegamos ao final do conjunto S, retorne o subconjunto atual
            if (index === S.length) {
                return [currentSubset];
            }

            // Inclua o elemento atual em currentSubset e gere subconjuntos com o elemento atual
            const subsetsWithElement = generateSubsetsHelper(index + 1, currentSubset.concat(S[index]));

            // Não inclua o elemento atual em currentSubset e gere subconjuntos sem o elemento atual
            const subsetsWithoutElement = generateSubsetsHelper(index + 1, currentSubset);

            // Combine os subconjuntos com e sem o elemento atual
            return [...subsetsWithElement, ...subsetsWithoutElement];
        }

        // Inicialize a função de geração de subconjuntos a partir do índice 0 e um conjunto vazio
        return generateSubsetsHelper(0, []);
    }

    return(
        <div>
            <h3>1ª Questão:</h3>
            <p>
               <strong>Entrada: Elementos de um conjunto finito S. Saída: Elementos de P(S) Algoritmo: Use recursão.</strong> 
            </p>
            <div className={styles.container} >
                <form onSubmit={submitForm} >
                    <label>Digite uns números:</label>
                    <div className={styles.container2} >
                        <input className={styles.inputs} placeholder="Ex: 1,2,3" onChange={handleChange}></input>
                        <button className={styles.buttons} onClick={enviou} type="button">Verificar</button>
                    </div>
                </form>
            </div>

            <div className={styles.retorno} >
                <p>Retorno:</p>
                <ul>
                    {resultado.map((result) =>(
                        <li>{result}</li>
                    ))}
                </ul>
            </div>
            <Botao funcao={press} />
            {show && <MsgBotao msg={<p>O objetivo do algoritmo proposto é gerar todos os subconjuntos possíveis a partir de um conjunto finito dado, representado por S. O conjunto resultante de todos os subconjuntos é conhecido como "P(S)" e é chamado de conjunto das partes ou conjunto das potências de S. Cada subconjunto em P(S) pode conter zero ou mais elementos do conjunto original S. <br></br><br></br> A abordagem utilizada para alcançar esse objetivo é a recursão, um método de resolução de problemas que envolve a divisão do problema em partes menores e a resolução dessas partes de forma repetida até que se chegue a uma solução.O algoritmo começa verificando se o conjunto S está vazio. <br></br><br></br> Se estiver vazio, a única solução é o conjunto vazio, uma vez que não existem elementos para formar subconjuntos. Nesse caso, o algoritmo retorna uma lista contendo apenas o conjunto vazio. Caso o conjunto S contenha elementos, o algoritmo seleciona o primeiro elemento e o remove do conjunto original. Em seguida, ele faz uma chamada recursiva para gerar todos os subconjuntos possíveis do conjunto restante (sem o primeiro elemento).<br></br><br></br> Esses subconjuntos são armazenados na variável "subsets_without_first". Depois disso, o algoritmo cria uma lista chamada "subsets_with_first" na qual adiciona o primeiro elemento a cada subconjunto gerado em "subsets_without_first". Dessa forma, obtém-se todos os subconjuntos que incluem o primeiro elemento. <br></br> <br></br> Ao final da recursão, o algoritmo combina os subconjuntos gerados com e sem o primeiro elemento e retorna o conjunto completo P(S), que contém todos os subconjuntos possíveis do conjunto S original. Em resumo, o objetivo desse algoritmo é fornecer uma maneira eficiente de gerar todos os subconjuntos de um conjunto finito, utilizando a técnica de recursão, e assim obter o conjunto das partes P(S) a partir do conjunto S de entrada.  Isso pode ser útil em várias aplicações, como problemas de combinação, permutação, análise de conjuntos de dados e muito mais.</p>} /> }
        </div>
    )
}

export default Atv1;
