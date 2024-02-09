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
  const [searchGender, setSearchGender] = useState('All');

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
  
  const handleGender =(value) => {
    setSearchGender(value);
  }
  const filteredCharacters = characters
    .filter((char) =>
    char.name.toLowerCase().includes(searchName.toLowerCase())
    )
    .filter((char) => {
      return searchGender === 'All' ? true : char.gender.toLowerCase().includes(searchGender.toLowerCase())

    }
    )
    
  const orderedCharacters = filteredCharacters.sort((a, b) => {
    const nameA = a.name.toUpperCase(); 
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }
  
    return 0;
  });


  const reset = () => {
    setSearchHouse('Gryffindor');
    setSearchName('');
    setSearchGender('All');
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
                  handleGender={handleGender}
                  searchGender={searchGender}
                />
                <input type='checkbox' onChange={handleSort}>Sort</input>
                {filteredCharacters.length === 0 ? (`${searchName} not found. Please try with another name`) : (<ListCharacters characters={orderedCharacters} />)}
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

