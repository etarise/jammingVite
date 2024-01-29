import styles from "./playlist.module.css";
export default function Playlist() {
  return (
    <form className={styles.addtoplaylistform}>
      <h1></h1>
      <button className={styles.mordernButton}>Save to Spotify</button>
    </form>
  );
}
