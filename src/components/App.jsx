import { Routes, Route, Link } from 'react-router-dom';
import Filters from './Filters';
import ListCharacters from './ListCharacters';
import DetailCharacter from './DetailCharacter';
import getApi from '../services/api';
import { useEffect, useState } from 'react';
import '../styles/App.scss';


function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getApi().then((cleanData) => {
      setCharacters(cleanData);
    });
  }, []);

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
                <Filters />
                <ListCharacters characters={characters}/>
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
