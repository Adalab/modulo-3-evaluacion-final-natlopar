import { Routes, Route } from 'react-router-dom';
import Filters from './Filters';
import ListCharacters from './ListCharacters';
import DetailCharacter from './DetailCharacter';
import getApi from '../services/api';
import { useEffect, useState } from 'react';
import '../styles/App.scss';
import MessageCharacter from './MessageCharacter';
import local from '../services/localStorage';



function App() {
  const [characters, setCharacters] = useState(local.get('characters', []));
  const [searchName, setSearchName] = useState('');
  const [searchHouse, setSearchHouse] = useState('Gryffindor');

  useEffect(() => {
    getApi(searchHouse).then((cleanData) => {
      setCharacters(cleanData);
      local.set('characters', cleanData);
    });
  }, [searchHouse]);

  const handleName = (value) => {
    setSearchName(value);
  };

  const handleHouse = (value) => {
    return setSearchHouse(value);
  };

  const filteredCharacters = characters.filter((char) =>
    char.name.toLowerCase().includes(searchName.toLowerCase())
  );

  const reset = () => {
    setSearchHouse('Gryffindor');
    setSearchName('');
  };

  return (
    <div>
      <header className='header'>
        <h1 className='header_title'>HARRY POTTER</h1>
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
                  reset={reset}
                  searchHouse={searchHouse}
                />
                {filteredCharacters.length === 0 ? (`${searchName} not found. Please try with another name`) : (<ListCharacters characters={filteredCharacters} />
                )}
              </>
            }
          />
            <Route path="/character/*" element={<MessageCharacter />} />
          <Route
            path="/character/:id"
            element={<DetailCharacter characters={characters} />}
          />
          <Route path="*" element={<MessageCharacter />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
//icono vida <i class="fa-solid fa-heart-pulse"></i>  //
//muerte  <i class="fa-solid fa-skull"></i> //
// volver <i class="fa-solid fa-circle-arrow-left"></i>  //
