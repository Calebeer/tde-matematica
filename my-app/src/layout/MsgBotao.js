import styles from './MsgBotao.module.css'

function MsgBotao({msg}){
    return(
        <div className={styles.msg}  >
            <p>{msg}</p>
        </div>
    )
}

export default MsgBotao;