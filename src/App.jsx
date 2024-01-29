import "./App.css";
import SearchSongs from "./components/SearchSongs";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchSongs />

      <Footer />
    </div>
  );
}

export default App;
