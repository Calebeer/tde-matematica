import { useState } from 'react';
import styles from './Botao.module.css'
import {SlArrowDownCircle} from "react-icons/sl";




function Botao({funcao}){

    const[botao, setBotao] = useState(false)
    
    function apertou(){
        setBotao(!botao)
        console.log(botao);
    }

    return(
        <div>
            <div className={styles.objective} >
                <button className={styles.butto} onClick={funcao}  >Objetivo ↓</button>
               
            </div>
        </div>
    )
}

export default Botao;