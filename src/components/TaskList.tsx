import styles from './TaskList.module.css'
import clipboardLogo from '../assets/clipboard.svg'

export function TaskList() {
    return (
        <article className={styles.headerTaskList}>
            <header className={styles.headerInfos}>
                <span className={styles.createdInfos}>
                    <span className={styles.createdContent}>
                        Tarefas criadas
                    </span>
                    <span className={styles.createdCounter}>
                        <p>
                            0
                        </p>
                    </span>
                </span>
                <span className={styles.completedInfo}>
                    <span className={styles.completeContent}>
                        Concluídas
                    </span>
                    <span className={styles.completedCounter}>
                        <p>
                            0
                        </p>
                    </span>
                </span>
            </header>

            <div className={styles.taskList}>
                <img src={clipboardLogo} alt="" />
                <strong>
                Você ainda não tem tarefas cadastradas <br />
                </strong>
                Crie tarefas e organize seus itens a fazer
            </div>
        </article>
    )
}