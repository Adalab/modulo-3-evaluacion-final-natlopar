import { Link } from 'react-router-dom';
import CardCharacter from './CardCharacter';
import PropTypes from 'prop-types';
import '../styles/layout/list.scss';

function ListCharacters({ characters }) {

  const charactersSection = characters.map((char) => (
      <li key={char.id} className='list__card'>
        <Link to={`/character/${char.id}`} className='link'>
          
            <CardCharacter char={char} />
         
        </Link>
      </li>
    ));
  

  return <ul className='list'>{charactersSection}</ul>;
}

ListCharacters.propTypes = {
  characters: PropTypes.array
}

export default ListCharacters;
