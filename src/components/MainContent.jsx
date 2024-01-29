import AddPlayList from "./Playlist";
import SearchResult from "./SearchResult";
import styles from "./maincontent.module.css";

export default function MainContent({ artist, setArtist }) {
  return (
    <div className={styles.mainContentDiv}>
      <SearchResult ResultantArtist={artist} setArtist={setArtist} />
      <AddPlayList />
    </div>
  );
}
