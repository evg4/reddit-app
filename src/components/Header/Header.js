import styles from "./Header.module.css";
import SearchBar from "../../features/searchBar/SearchBar";

function Header() {
  return (
    <div className={styles.div}>
      <h1 className={styles.h1}>
        Reddit<span className={styles.span}>mini</span>
      </h1>
      <SearchBar />
    </div>
  );
}

export default Header;
