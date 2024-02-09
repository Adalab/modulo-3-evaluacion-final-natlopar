import { Link, useParams } from 'react-router-dom';
import photo from '../images/default.jpg';


function DetailCharacter({ characters }) {

  const { id } = useParams();
  const findCharacter = characters.find((char) => char.id === id);
  const renderImage = (findCharacter) => {
    return findCharacter.image === '' ? photo : findCharacter.image;
  };


  return (
    <section className="detail">
      <Link to={'/'} className="detail__link">
        <i className="fa-solid fa-circle-arrow-left detail__link--icon"></i>
      </Link>
      <article className='detail__card'>
        <img className='detail__card--img'
          src={renderImage(findCharacter)}
          alt={`Imagen de ${findCharacter.name}`}
        />
        <h3 className='detail__card--titl'>{findCharacter.name}</h3>
        <p className='detail__card--text'>Species: {findCharacter.species}</p>
        <p className='detail__card--text'>Gender: {findCharacter.gender}</p>
        <p className='detail__card--text'>
          Status:{' '}
          {findCharacter.alive ? (
            <i className="fa-solid fa-heart-pulse heart"></i>
          ) : (
            <i className="fa-solid fa-skull"></i>
          )}
        </p>
        <div>
          <p className='detail__card--text'>Alternate Names:</p>
          <ul>
            {findCharacter.alternate_names.map((char, i) => (
              <li key={i} className='detail__card--text'>{char}</li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
}

export default DetailCharacter;
