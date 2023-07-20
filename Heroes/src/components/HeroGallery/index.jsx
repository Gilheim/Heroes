import { useEffect, useState } from "react"
import {Link} from "react-router-dom"

export default function HeroGallery() {
    const [shows, setShows] = useState([])

    useEffect(() => {
        async function displayShows() {
            const response = await fetch(`https://superheroapi.com/api/243602908490010`)
            const data = await response.json()
            setShows(data)
        }

        displayShows()
    }, [])

    return(
        <div className= "shows">
            {shows.map((show) => {
                return (
                <Link to={`${show.id}`} key = {show.id}>
                    <div className = "gallery-image" >
                        <img src={show.image.medium} />
                    </div>
                </Link>)
            })}
        </div>
    )
}