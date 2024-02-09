import { Link } from 'react-router-dom';
import CardCharacter from './CardCharacter';

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

export default ListCharacters;
