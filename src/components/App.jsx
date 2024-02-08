import { Routes, Route, Link } from 'react-router-dom';
import Filters from './Filters';
import ListCharacters from './ListCharacters';
import DetailCharacter from './DetailCharacter';
import getApi from '../services/api';
import { useEffect, useState } from 'react';
import '../styles/App.scss';


function App() {

  const [characters, setCharacters] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchHouse, setSearchHouse] = useState ("Gryffindor");

  useEffect(() => {
    getApi(searchHouse).then((cleanData) => {
      setCharacters(cleanData);
    });
  }, [searchHouse]);

  const handleName = (value) => {
    return setSearchName(value);
  }

  const handleHouse = (value) => {
    return setSearchHouse(value);
  }

  const filteredCharacters = characters
    .filter((char) => char.name.toLowerCase().includes(searchName.toLowerCase()))

  return (
    <div>
      <header>
        <h1>HARRY POTTER</h1>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters 
                handleName={handleName}
                searchName={searchName}
                handleHouse={handleHouse}
                />
                <ListCharacters characters={filteredCharacters}/>
              </>
            }
          />
          <Route path="/character/:id" element={<DetailCharacter />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
//icono vida <i class="fa-solid fa-heart-pulse"></i>  //
//muerte  <i class="fa-solid fa-skull"></i> //
// volver <i class="fa-solid fa-circle-arrow-left"></i>  //
