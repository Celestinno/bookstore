import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";

const genresFiction = ['fantasy', 'historical', 'horror', 'manga', 'medieval', 'romance', 'science-fiction', 'thriller', 'western']
const genresEducational = ['art', 'engineering', 'geography', 'history', 'math', 'photography', 'science', 'technology']
const languages = ['english', 'french', 'german', 'italian', 'portuguese', 'spanish']
const formats = ['audiobook', 'e-book', 'hardcover', 'kindle', 'paperback']
const years = ['1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s']


function App() {
  const [data, setData] = useState([])
  fetch('data.json'
    , {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  )
    .then(response => response.json())
    .then(response => setData(response))
  return (
    <div className="App">
      <Sidebar years={years} formats={formats} languages={languages} genresEducational={genresEducational} genresFiction={genresFiction} />
      <Body data={data} />
      <Header />


    </div>
  );
}

export default App;
