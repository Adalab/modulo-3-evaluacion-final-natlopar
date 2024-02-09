import { Link, useParams } from 'react-router-dom';
import photo from '../images/default.jpg';
import PropTypes from 'prop-types';
import gryf from '../images/gryf.png';
import huff from '../images/huff.png';
import raven from '../images/raven.png';
import slytherin from '../images/slytherin.png';
import witch from '../images/maga.jpg';

function DetailCharacter({ characters }) {
  const { id } = useParams();
  const findCharacter = characters.find((char) => char.id === id);
  const renderImage = () => {
    if (findCharacter.image === '' && findCharacter.gender === 'male') {
      return photo;
    } else if (
      findCharacter.image === '' &&
      findCharacter.gender === 'female'
    ) {
      return witch;
    } else {
      return findCharacter.image;
    }
  };
  const renderHouse = () => {
    if (findCharacter.house === 'Gryffindor') {
      return gryf;
    } else if (findCharacter.house === 'Slytherin') {
      return slytherin;
    } else if (findCharacter.house === 'Ravenclaw') {
      return raven;
    } else {
      return huff;
    }
  };

  const classBackground = () => {
    if (findCharacter.house === 'Gryffindor') {
      return 'gryfBack';
    } else if (findCharacter.house === 'Slytherin') {
      return 'slytherin';
    } else if (findCharacter.house === 'Ravenclaw') {
      return 'raven';
    } else {
      return 'huff';
    }
  };
  return (
    <section className="detail">
      <Link to={'/'} className="detail__link">
        <i className="fa-solid fa-circle-arrow-left detail__link--icon"></i>
      </Link>
      <article className={`detail__card ${classBackground()}`}>
        <img
          className="detail__card--img"
          src={renderImage()}
          alt={`Imagen de ${findCharacter.name}`}
        />
        <div className="detail__card--total">
          <h3 className="detail__card--titl">{findCharacter.name}</h3>
          <p className="detail__card--text">Species: {findCharacter.species}</p>
          <p className="detail__card--text">Gender: {findCharacter.gender}</p>
          <p className="detail__card--text">
            Status:{' '}
            {findCharacter.alive ? (
              <i className="fa-solid fa-heart-pulse heart"></i>
            ) : (
              <i className="fa-solid fa-skull"></i>
            )}
          </p>
          <div>
            {findCharacter.alternate_names.length > 0 ? (
              <p>Alternate names:</p>
            ) : (
              <p></p>
            )}

            {findCharacter.alternate_names.length > 0 ? (
              findCharacter.alternate_names.map((char, i) => (
                <p key={i} className="detail__card--text">
                  {char}
                </p>
              ))
            ) : (
              <li></li>
            )}
          </div>
          <img
            src={renderHouse()}
            alt={`Imagen de ${findCharacter.house}`}
            className="detail__card--house"
          ></img>
        </div>
      </article>
    </section>
  );
}

DetailCharacter.propTypes = {
  characters: PropTypes.array,
};

export default DetailCharacter;
