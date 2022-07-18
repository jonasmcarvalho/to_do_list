import styles from './Task.module.css'
import { CheckCircle, Circle } from 'phosphor-react'

export function Task() {
    return (
        <div className={styles.taskFull}>
            <div className={styles.checkButton}>
                <button className={styles.selectButton}>
                    <Circle  />
                </button>
            </div>

            <span>
                <p> Integer urna interdum massa libero auctor neque turpis turpis semper. 
                    Duis vel sed fames integer.
                </p>
            </span>

            <div>
                <p>T</p>
            </div>
        </div>
    )
}