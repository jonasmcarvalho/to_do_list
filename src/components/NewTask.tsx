import styles from './NewTask.module.css'
import moreSignal from '../assets/plus.svg'


export function NewTask() {
    return (
        <div>
            <form className={styles.commentForm} action="">
                <textarea 
                    name="Adicione nova tarefa" 
                    title="Adicionar nova tarefa" 
                    placeholder="Adicionar uma nova tarefa"
                />

                <button 
                    type="submit"
                >
                    <div>
                        Criar
                    </div>
                    <div className={styles.plus}>
                        <img src={moreSignal} alt="" />
                    </div>
                </button>

            </form>
        </div>
    )
}