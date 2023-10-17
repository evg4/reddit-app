import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <form className={styles.input}>
      <input placeholder="Enter search term..."></input>
      <button>Search</button>
    </form>
  );
}

export default SearchBar;
