import DisplaySong from "./DisplaySong";
import styles from "./result.module.css";
export default function SearchResult({ artist, setArtist }) {
  //const artistToSearch ={props.ResultantArtist}

  const userList = [
    {
      id: "e34fd5z",
      artist: "Evans Tarise",
      album: "Zvido",
      image: "john-smith.jpg",
      songName: "Sarungano",
    },
    {
      id: "f43gn24r",
      artist: "Jane Smith",
      album: "Zvita",
      image: "jane-smith.jpg",
      songName: "Sarungano",
    },
    // ...
    {
      id: "f43gn248",
      artist: "Jane Smith",
      album: "Liverpool",
      image: "jane-smith.jpg",
      songName: "Sarungano",
    },
    // ...
    {
      id: "f43gn24",
      artist: "Jane Tom",
      album: "Makomborero",
      image: "jane-smith.jpg",
      songName: "SarunganoTAMBAOGA ",
    },

    {
      id: "f43gn242",
      artist: "Jane Tom",
      album: "Makomborero",
      image: "jane-smith.jpg",
      songName: "MAKANAKA JESU ",
    },

    {
      id: "f43gn2421",
      artist: "Jane Tom",
      album: "Makomborero",
      image: "jane-smith.jpg",
      songName: " JESU ",
    },
    {
      id: "f43gnM242",
      artist: "Jane Tom",
      album: "Makomborero",
      image: "jane-smith.jpg",
      songName: "MWARI JESU ",
    },
    // ...
    {
      id: "f43gn21",
      artist: "Jane Gurash",
      album: "jemedza",
      image: "jane-smith.jpg",
      songName: "Sarungano",
    },
    // ...
  ];
  return (
    <div className={styles.ResultMainDiv}>
      <h2>Results</h2>

      <h2>{artist} </h2>

      {userList
        .filter((song) => song.artist === "Jane Tom")
        .map((song) => (
          // <li key={song.id}>{song.email}</li>
          <DisplaySong
            key={song.id}
            songName={song.songName}
            artist={song.artist}
            album={song.album}
            other={song.id}
          />
        ))}
    </div>
  );
}
