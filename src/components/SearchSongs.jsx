import { useState } from "react";
import SearchBar from "./SearchBar";

import MainContent from "./MainContent";

export default function SearchSongs() {
  const [artist, setArtist] = useState(""); //storing as  string

  return (
    <div>
      <SearchBar artist={artist} setArtist={setArtist} />
      <MainContent artist={artist} setArtist={setArtist} />
    </div>
  );
}
