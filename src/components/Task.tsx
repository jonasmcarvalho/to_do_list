import styles from './Task.module.css'
import { CheckCircle, Circle, Trash } from 'phosphor-react'

export function Task() {
    return (
        <div className={styles.taskFull}>
            <div className={styles.checkButton}>
                <button className={styles.selectButton}>
                    <Circle size={24} className={styles.circle} />
                </button>
            </div>

            <span>
                <p> Integer urna interdum massa libero auctor neque turpis turpis semper. 
                    Duis vel sed fames integer.
                </p>
            </span>

            <div className={styles.trashIcon}>
                <button>
                    <Trash size={24} />
                </button>
            </div>
        </div>
    )
}