// Assets
import styles from "../styles/Loader.module.scss";

const Loader = () => {
    return (
        <div className={styles.loader}>
            <div className={styles.loader_roller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader;