import { Link } from 'react-router-dom';
import CardCharacter from './CardCharacter';
import PropTypes from 'prop-types';

function ListCharacters({ characters }) {

  const charactersSection = characters.map((char) => (
      <section key={char.id}>
        <Link to={`/character/${char.id}`} className='link'>
          <li>
            <CardCharacter char={char} />
          </li>
        </Link>
      </section>
    ));
  

  return <ul>{charactersSection}</ul>;
}

ListCharacters.propTypes = {
  characters: PropTypes.array
}

export default ListCharacters;
