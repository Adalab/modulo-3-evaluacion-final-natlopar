import { Link } from "react-router-dom"
import CardCharacter from "./CardCharacter"

function ListCharacters({characters}) {

    const renderList = () => {
        return characters.map((char) => {
            return <li key={char.id}>
                <CardCharacter char={char}/>
            </li>
        })
    }

  return (

    <Link to={'/character/id del personaje'}>
    <section><ul>{renderList()}</ul></section>
    </Link>
  )
}

export default ListCharacters