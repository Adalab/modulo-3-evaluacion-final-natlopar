import { Routes, Route, Link } from "react-router-dom"
import Filters from "./Filters"
import ListCharacters from "./ListCharacters"
import DetailCharacter from "./DetailCharacter"


function App() {




  return (
    <div> 
      <header>
        <h1>HARRY POTTER</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={
            <>
            <Filters/>
            <ListCharacters/>
            </>
          }/>
          <Route path="/character/:id" element={<DetailCharacter/>}/>
        
        
        </Routes>
        
      </main>



    </div>


  )
}

export default App
//icono vida <i class="fa-solid fa-heart-pulse"></i>  //
//muerte  <i class="fa-solid fa-skull"></i> //
 // volver <i class="fa-solid fa-circle-arrow-left"></i>  //