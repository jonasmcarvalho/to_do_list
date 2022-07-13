import styles from './TaskList.module.css'

export function TaskList() {
    return (
        <article className={styles.headerTaskList}>
            <header className={styles.headerInfos}>
                <span className={styles.createdInfo}>
                    <span>
                        Tarefas criadas
                    </span>
                    <span>
                        0
                    </span>
                </span>
                <span className={styles.completedInfo}>
                    <span>
                        Concluídas
                    </span>
                    <span>
                        0
                    </span>
                </span>
            </header>
            
            <div className={styles.taskList}>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </article>
    )
}