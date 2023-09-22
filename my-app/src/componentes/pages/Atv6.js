import { useState } from 'react';
import styles from './Atv1.module.css'
import Botao from '../../layout/Botao';
import MsgBotao from '../../layout/MsgBotao';

function Atv6() {
    const [formData, setFormData] = useState('');
    const [resultado, setResultado] = useState([]);
    const[show, setShow] = useState(false);

    function submitForm(e) {
        e.preventDefault();
    }

    function press(){
        setShow(!show)
    }

    function handleChange(e) {
        setFormData(e.target.value);
    }

    function enviou() {
        const n = parseInt(formData);
        const coeficientes = calcularCoeficientesBinomiais(n);
        setResultado(coeficientes);
    }

    function calcularCoeficientesBinomiais(n) {
        if (isNaN(n) || n < 0) {
            return "n deve ser um número não negativo";
        }

        // Função para calcular o fatorial de um número
        function fatorial(num) {
            if (num === 0) {
                return 1;
            }
            return num * fatorial(num - 1);
        }

        const coeficientes = [];

        for (let r = 0; r <= n; r++) {
            const coeficiente = fatorial(n) / (fatorial(r) * fatorial(n - r));
            coeficientes.push(coeficiente);
        }

        return coeficientes;
    }

    return (
        <div>
            <h3>6ª Questão:</h3>
            <p>
                <strong>Entrada: Valor de n
                Saída: Todos os valores de C(n, r), 0 ≤ r ≤ n</strong>
            </p>
            <div className={styles.container}>
                <form onSubmit={submitForm}>
                    <label>Digite o valor de n:</label>
                    <div className={styles.container2}>
                        <input className={styles.inputs} onChange={handleChange} placeholder="Valor de n"></input>
                        <button className={styles.buttons} onClick={enviou} type="button">Executar</button>
                    </div>
                </form>
            </div>

            <div className={styles.retorno}>
                <p>Retorno:</p>
                <ul>
                    {resultado.map((coeficiente, r) => (
                        <li key={r}>{`C(${formData}, ${r}) = ${coeficiente}`}</li>
                    ))}
                </ul>
            </div>
            <Botao funcao={press} />
            {show && <MsgBotao msg={<p>O objetivo deste problema é calcular e apresentar todos os valores das combinações possíveis "C(n, r)" para um valor específico "n" dado como entrada. A função "C(n, r)" representa o número de maneiras diferentes de escolher "r" elementos de um conjunto de tamanho "n", onde a ordem dos elementos escolhidos não importa. Essa é uma parte fundamental da matemática combinatória.
<br></br><br></br>
Aqui estão os elementos-chave deste problema:
<br></br><br></br>
1 - <strong>Entrada do Valor "n":</strong>  O problema requer um único valor de entrada, que é "n". Esse valor representa o tamanho total do conjunto do qual desejamos extrair combinações.
<br></br><br></br>
2 - <strong>Valores de "r":</strong>  Para calcular todas as combinações possíveis, devemos considerar diferentes valores de "r" dentro do intervalo de 0 a "n", inclusive. Isso significa que precisamos calcular "C(n, 0)", "C(n, 1)", "C(n, 2)", ..., "C(n, n)".
<br></br><br></br>
3 - <strong>Cálculo de C(n, r):</strong>  O objetivo é calcular o valor de "C(n, r)" para cada valor de "r" no intervalo especificado. Isso envolve usar a fórmula ou algoritmo apropriado para determinar o número exato de combinações possíveis.
<br></br><br></br>
4 - <strong>Saída Desejada:</strong>  A saída desejada é uma lista ou conjunto de todos os valores de "C(n, r)" para cada "r" dentro do intervalo permitido. Isso significa que, para uma única entrada "n", a saída conterá múltiplos valores correspondentes a todas as combinações possíveis.
<br></br><br></br>
Esse problema é importante em diversas áreas, como estatísticas, probabilidade, teoria dos números, ciência da computação e engenharia. É utilizado para calcular probabilidades, analisar conjuntos de dados, otimizar algoritmos e resolver problemas que envolvem escolhas e agrupamentos de elementos.

</p>} /> }
        </div>
    )
}

export default Atv6;
