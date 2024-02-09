import { Link, useParams } from 'react-router-dom';
import photo from '../images/default.jpg';
import PropTypes from 'prop-types';
import gryf from '../images/gryf.png';



function DetailCharacter({ characters }) {

  const { id } = useParams();
  const findCharacter = characters.find((char) => char.id === id);
  const renderImage = () => {
    return findCharacter.image === '' ? photo : findCharacter.image;
  };
  // const renderHouse = () => {
  //   if (findCharacter.house === 'Gryffindor'){
  //     return gryf
  //   }
  // }
 
  const classBackground =()=> {
    if (findCharacter.house === 'Gryffindor') {
      return 'gryfBack'
    }
  }

  return (
    <section className="detail">
      <Link to={'/'} className="detail__link">
        <i className="fa-solid fa-circle-arrow-left detail__link--icon"></i>
      </Link>
      <article className={`detail__card ${classBackground()}`}>
        
        <img className='detail__card--img'
          src={renderImage()}
          alt={`Imagen de ${findCharacter.name}`}
        />
        <div className='detail__card--total'>
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
        {/* <img src={renderHouse()}
          alt={`Imagen de ${findCharacter.house}`} className='detail__card--house'></img> */}
          </div>
      </article>
    </section>
  );
}


DetailCharacter.propTypes = {
  characters: PropTypes.object
}

export default DetailCharacter;
