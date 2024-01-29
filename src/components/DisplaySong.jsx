import Playlist from "./Playlist";
import styles from "./displaysong.module.css";
export default function DisplaySong(props) {
  function handleSubmitOnDisplayedSongs() {
    alert("in handle after display");
  }

  return (
    <form className={styles.DisplaySongContainer}>
      <img />
      <span>
        <h2>{props.songName}</h2>
        <span>
          <h5>{props.artist} </h5> <h5>{props.album} </h5>
        </span>
      </span>

      <button
        onClick={() => handleSubmitOnDisplayedSongs()}
        className={styles.addToPlaylistBtn}
      >
        +
      </button>
    </form>
  );
}
