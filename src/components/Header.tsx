import styles from './Header.module.css'

import toDoLogo from '../assets/toDoLogo.svg'


export function Header() {
    return (
        <header className={styles.header}>
            <img src={toDoLogo} alt="Logo da to do list" />
        </header>
    );
}
