import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function ShowGallery() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    async function displayHeroes() {
  
      const response = await fetch(
        `https://superheroapi.com/api/243602908490010/`
      );
      const data = await response.json();
      setHeroes(data);
      console.log(data)
    }
    displayHeroes();
  }, []);

  return (
    <div className="heroes">
      {heroes.map((hero) => {
        return (
          <Link to={`${hero.id}`} key={hero.id}>
            <div className="gallery-image">
              <img src={hero.url} alt={hero.name} />
            </div>
          </Link>
        );
      })}
    </div>
  );
}

