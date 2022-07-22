import styles from './TaskList.module.css'
import clipboardLogo from '../assets/clipboard.svg'
import { NewTask } from './NewTask'
import { Task } from './Task'

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
            
            <div className={styles.taskListNotEmpty}>

                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    
                
                    <img src={clipboardLogo} alt=""/>
                    <strong>
                        Você ainda não tem tarefas cadastradas
                    </strong>
                    <p>
                        Crie tarefas e organize seus itens a fazer
                    </p>
                
            </div>
        </article>
    )
}