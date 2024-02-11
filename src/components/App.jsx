import { Routes, Route } from 'react-router-dom';
import Filters from './Filters';
import ListCharacters from './ListCharacters';
import DetailCharacter from './DetailCharacter';
import getApi from '../services/api';
import { useEffect, useState } from 'react';
import '../styles/App.scss';
import MessageCharacter from './MessageCharacter';
import local from '../services/localStorage';
import title from '../images/title.jpg';
import back from '../images/back.jpg';
import flag from '../images/banderas.jpg';

function App() {
  const [characters, setCharacters] = useState(local.get('characters', []));
  const [searchName, setSearchName] = useState('');
  const [searchHouse, setSearchHouse] = useState('Gryffindor');
  const [searchGender, setSearchGender] = useState('All');
  const [isChecked, setIsChecked] = useState(false);

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

  const handleGender = (value) => {
    setSearchGender(value);
  };
  
  const filteredCharacters = characters
    .filter((char) =>
      char.name.toLowerCase().includes(searchName.toLowerCase())
    )
    .filter((char) => {
      return searchGender === 'All'
        ? true
        : char.gender.toLowerCase() === searchGender.toLowerCase();
    });

  const handleSort = (checked) => {
    setIsChecked(checked);
  };

  let sortedCharacters = isChecked
    ? filteredCharacters.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      })
    : filteredCharacters;

  const reset = () => {
    setSearchHouse('Gryffindor');
    setSearchName('');
    setSearchGender('All');
    setIsChecked(false);
  };
  return (
    <div className="bodyApp">
      <header className="bodyApp__header">
        <img
          src={flag}
          alt="imagen banderas"
          className="bodyApp__header--img"
        />
        <img src={title} alt="title" className="bodyApp__header--title" />
        <img
          src={back}
          alt="imagen castillo"
          className="bodyApp__header--img"
        />
      </header>
      <main className="bodyApp__main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="filterSection">
                  <Filters
                    handleName={handleName}
                    searchName={searchName}
                    handleHouse={handleHouse}
                    reset={reset}
                    searchHouse={searchHouse}
                    handleGender={handleGender}
                    searchGender={searchGender}
                    handleSort={handleSort}
                    isChecked={isChecked}
                  />
                </div>
                {filteredCharacters.length === 0 ? (
                  <div className="divNotfound">
                    <p className="notFound">{`${searchName} not found. Please try with another name`}</p>
                  </div>
                ) : (
                  <ListCharacters characters={sortedCharacters} />
                )}
              </>
            }
          />
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
