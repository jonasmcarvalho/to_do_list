import styles from './NewTask.module.css'


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
                    Criar
                </button>

            </form>
        </div>
    )
}