import styles from './Header.module.css';


const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.image} src="https://static.vecteezy.com/system/resources/previews/007/165/745/original/cute-purple-calculator-icon-flat-design-for-app-label-illustration-free-vector.jpg" alt="Calculator Icon" />
            <h1>BMI Calculator</h1>
        </header>
    )
}

export default Header;