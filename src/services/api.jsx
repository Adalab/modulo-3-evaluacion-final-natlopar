const getApi =()=>{
    return fetch('https://hp-api.onrender.com/api/characters/house/' + 'gryffindor') 
      .then((response)=> response.json())
      .then((data)=>{
        const cleanData = data.map((char) => {
          return {
            id: char.id, 
            name: char.name, 
            alternate_names: char.alternate_names, 
            species: char.species, 
            gender: char.gender, 
            alive: char.alive, 
            image: char.image, 
            house: char.house
          };
        });
        return cleanData;
      })
};

export default getApi; 