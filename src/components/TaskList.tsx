import styles from './TaskList.module.css'

export function TaskList() {
    return (
        <article className={styles.taskList}>
            <header>
                <span>
                    <span>
                        Tarefas criadas
                    </span>
                    <span>
                        0
                    </span>
                </span>
                <span>
                    <span>
                        Concluídas
                    </span>
                    <span>
                        0
                    </span>
                </span>
            </header>
            <div>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </article>
    )
}