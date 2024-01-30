import Playlist from "./Playlist";
import styles from "./displaysong.module.css";
import { useState } from "react";
export default function DisplaySong(props) {
  const [playlist, setPlaylist] = useState([]); //storing as  string
  function handleSubmitOnDisplayedSongs(songid) {
    alert("in handle after display" + songid);
    var arr = [...playlist]; //copy array by value
    arr.push(songid);
    setPlaylist(arr); //override state with new values
    //remove song infor from the display and add to the  playlist
    alert(playlist);
  }

  return (
    <div className={styles.DisplaySongContainer}>
      <img />
      <span>
        <h2>{props.songName}</h2>

        <span>
          <h5>{props.artist} </h5> <h5>{props.album} </h5>
        </span>
      </span>

      <button
        onClick={() => handleSubmitOnDisplayedSongs(props.other)}
        className={styles.addToPlaylistBtn}
      >
        +
      </button>
    </div>
  );
}
