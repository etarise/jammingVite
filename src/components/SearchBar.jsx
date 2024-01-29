import styles from "./searchbar.module.css";
export default function SearchBar({ artist, setArtist }) {

  
  //function to handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <form className={styles.SearchContainer} onSubmit={(e) => handleSubmit(e)}>
      <input
        className={styles.SearchBar}
        type="text"
        placeholder="Please Enter Text Here...."
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <button className={styles.mordernButton} type="submit">
        SEARCH
      </button>
    </form>
  );
}
