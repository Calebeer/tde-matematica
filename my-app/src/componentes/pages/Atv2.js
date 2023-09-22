import { useState } from 'react';
import styles from './Atv1.module.css'
import Botao from '../../layout/Botao';
import MsgBotao from '../../layout/MsgBotao';


function Atv2(){
    
    const[formData,setFormData] = useState('')
    const[resultado,setResultado] = useState()
    const[show, setShow] = useState(false)

    function handleChange(e){
        setFormData(e.target.value);
        console.log(formData);
    }

    function submitForm(e){
        e.preventDefault()
    }

    function enviou(){
        console.log(formData);
        const expressaoFinal = formData ;
        const resultado = calcularExpressaoPosFixa(expressaoFinal)
        console.log(`resultado:${resultado}`);
        setResultado(resultado)
    }

    function calcularExpressaoPosFixa(expressao) {
        const pilha = [];
      
        const tokens = expressao.split(' ');
      
        for (const token of tokens) {
          if (isNumero(token)) {
            // Se for um número, empilhe-o na pilha
            pilha.push(parseFloat(token));
          } else if (isOperador(token)) {
            // Se for um operador, desempilhe os dois valores mais recentes,
            // aplique o operador e empilhe o resultado
            const b = pilha.pop();
            const a = pilha.pop();
            const resultado = realizarOperacao(a, b, token);
            pilha.push(resultado);
          }
        }
      
        // O resultado final estará no topo da pilha
        return pilha[0];
      }
      
      function isNumero(token) {
        // Verifica se o token é um número
        return !isNaN(parseFloat(token));
      }
      
      function isOperador(token) {
        // Verifica se o token é um dos operadores suportados (+, -, *, /, etc.)
        return ['+', '-', '*', '/', '^'].includes(token);
      }
      
      function press(){
        setShow(!show)
      }

      function realizarOperacao(a, b, operador) {
        // Realiza a operação com base no operador
        switch (operador) {
          case '+':
            return a + b;
          case '-':
            return a - b;
          case '*':
            return a * b;
          case '/':
            if (b === 0) {
              throw new Error('Divisão por zero não é permitida.');
            }
            return a / b;
          case '^':
            return Math.pow(a, b);
          // Adicione mais operadores conforme necessário
          default:
            throw new Error(`Operador não suportado: ${operador}`);
        }
      }

    return(
        <div>
            <h3>2ª Questão:</h3>
            <p>
                <strong>Entrada: Expressão aritmética na notação pós-fixa (veja o Exercício 31 na Seção 3.1)
            Saída: Valor da expressão</strong>
            </p>
            <div className={styles.container} >
                <form onSubmit={submitForm} >
                    <label>Digite uns números:</label>
                    <div className={styles.container2} >
                        <input className={styles.inputs} onChange={handleChange} placeholder="Ex: 3 4 + 2 * 7 /" ></input>
                        <button className={styles.buttons} onClick={enviou}  type="button">Verificar</button>
                    </div>
                </form>
            </div>

            <div className={styles.retorno} >
                <p>Retorno: <strong>{resultado}</strong> </p>
            </div>
            <Botao funcao={press} />
            {show && <MsgBotao msg={<p>O objetivo deste algoritmo é avaliar uma expressão aritmética fornecida na notação pós-fixa, também conhecida como notação polonesa reversa. Em vez de usar os tradicionais operadores binários (+, -, *, /) entre os operandos (números), a notação pós-fixa coloca o operador depois dos operandos.
<br></br><br></br>
A entrada para o algoritmo é a expressão aritmética na notação pós-fixa, onde os operandos e operadores estão organizados de acordo com essa notação. A saída desejada é o valor resultante da avaliação dessa expressão.
<br></br><br></br>
O processo de avaliação envolve percorrer a expressão da esquerda para a direita e, para cada elemento (seja um operando ou operador), realizar as operações apropriadas. Para isso, geralmente usa-se uma pilha (stack) para auxiliar na avaliação.</p>}/>}
        </div>
    )
}

export default Atv2;