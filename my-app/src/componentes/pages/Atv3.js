import { useState } from 'react';
import styles from './Atv1.module.css'
import Botao from '../../layout/Botao';
import MsgBotao from '../../layout/MsgBotao';


function Atv3(){
    
    const[formData,setFormData] = useState('')
    const[formDataB,setFormDataB] = useState('')
    const [resultadoA,setResultadoA] = useState()
    const [resultadoB,setResultadoB] = useState()
    const[show, setShow] = useState(false)


    function submitFormB(e){
        e.preventDefault();
    }

    function handleChangeB(e){
        setFormDataB(e.target.value)
        console.log(formDataB);
    }

    function enviouB(){
        const expressaoFinal = formDataB ;
        const resultado = infixaParaPosfixaSemParenteses(expressaoFinal)
        setResultadoB(resultado)
    }

    function submitForm(e){
        e.preventDefault();
    }

    function handleChange(e){
        setFormData(e.target.value);
        console.log(formData);
    }

    function enviouA(){
        const expressaoFinal = formData ;
        const resultado = infixaParaPosfixaComParenteses(expressaoFinal)
        setResultadoA(resultado)
        console.log(resultado);
    }

    function press(){
        setShow(!show)
    }

    function infixaParaPosfixaComParenteses(expressao) {
        const pilha = [];
        const posfixa = [];
        const precedencia = { '+': 1, '-': 1, '*': 2, '/': 2, '^': 3 };
      
        for (const token of expressao.split(' ')) {
          if (isOperando(token)) {
            posfixa.push(token);
          } else if (token === '(') {
            pilha.push(token);
          } else if (token === ')') {
            while (pilha.length > 0 && pilha[pilha.length - 1] !== '(') {
              posfixa.push(pilha.pop());
            }
            pilha.pop(); // Remove o '(' da pilha
          } else if (isOperador(token)) {
            while (
              pilha.length > 0 &&
              pilha[pilha.length - 1] !== '(' &&
              precedencia[token] <= precedencia[pilha[pilha.length - 1]]
            ) {
              posfixa.push(pilha.pop());
            }
            pilha.push(token);
          }
        }
      
        while (pilha.length > 0) {
          posfixa.push(pilha.pop());
        }
      
        return posfixa.join(' ');
      }
      
      function isOperando(token) {
        return /^[0-9]+$/.test(token);
      }
      
      function isOperador(token) {
        return /^[+\-*/^]$/.test(token);
      }


      function infixaParaPosfixaSemParenteses(expressao) {
        const pilha = [];
        const posfixa = [];
        const precedencia = { '+': 1, '-': 1, '*': 2, '/': 2, '^': 3 };
      
        const tokens = expressao.split(' ');
      
        for (const token of tokens) {
          if (isOperando(token)) {
            posfixa.push(token);
          } else if (isOperador(token)) {
            while (
              pilha.length > 0 &&
              pilha[pilha.length - 1] !== '(' &&
              precedencia[token] <= precedencia[pilha[pilha.length - 1]]
            ) {
              posfixa.push(pilha.pop());
            }
            pilha.push(token);
          }
        }
      
        while (pilha.length > 0) {
          posfixa.push(pilha.pop());
        }
      
        return posfixa.join(' ');
      }

    
    return(
        <div>
            <h3>3ª Questão:</h3>
            <p>
                <strong>Entrada: Expressão aritmética na notação in-fixa (veja o Exercício 31 na Seção 3.1)
            Saída: Forma pós-fixa da expressão.
            Resolva este problema de duas maneiras:</strong> 
            </p>
            <strong>A)</strong>  Assuma que a entrada faz sempre uso de parênteses:
            <br/><br/>
            <div className={styles.container} >
                <form onSubmit={submitForm} >
                    <label>Digite uns números:</label>
                    <div className={styles.container2} >
                        <input className={styles.inputs} onChange={handleChange} placeholder="Ex: ( 3 + 4 ) * 2 / ( 1 - 5 )" ></input>
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
             <strong>B)</strong>  Assuma que a entrada faz sempre uso de parênteses:
             <br/>
             <br/>
            <div className={styles.container} >
                <form onSubmit={submitFormB} >
                    <label>Digite uns números:</label>
                    <div className={styles.container2} >
                        <input className={styles.inputs} onChange={handleChangeB} placeholder="Ex: 3 + 4 * 2 / 1 - 5" ></input>
                        <button className={styles.buttons} onClick={enviouB}  type="button">Verificar</button>
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
            {show && <MsgBotao msg={<p>O objetivo deste problema é lidar com expressões aritméticas na notação infixa, que é a forma padrão que estamos acostumados a usar para expressões matemáticas, como "3 + 4 * 2". No entanto, o desafio é transformar essa expressão infixa em sua forma equivalente na notação pós-fixa, também conhecida como notação polonesa reversa.
<br></br><br></br>
A notação pós-fixa é uma representação alternativa das expressões matemáticas, na qual os operadores são colocados após os operandos. No exemplo anterior, a expressão infixa "3 + 4 * 2" seria representada na notação pós-fixa como "3 4 2 * +".
<br></br><br></br>
O problema envolve duas partes distintas:
<br></br><br></br>
1 - Converter de Infixa para Pós-fixa: A primeira parte é criar um algoritmo que receba uma expressão aritmética na notação infixa como entrada e gere a correspondente expressão na notação pós-fixa como saída. Isso requer a implementação de regras para respeitar a precedência dos operadores (por exemplo, * antes de +).
<br></br><br></br>
2 - Resolver a Expressão Pós-fixa: A segunda parte envolve a resolução da expressão pós-fixa gerada na etapa anterior. Isso pode ser feito utilizando uma pilha para manter o controle dos operandos e operadores enquanto a expressão é percorrida da esquerda para a direita. À medida que os elementos são lidos, eles são empilhados ou desempilhados e as operações são realizadas.</p>} />}
        </div>
    )
}

export default Atv3;