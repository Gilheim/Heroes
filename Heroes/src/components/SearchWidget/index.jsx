import { useState, useEffect } from "react"
import HeroCard from "../HeroCard"

export default function SearchWidget() {
    const [inputValue, setInputValue] = useState("")
    const [searchString, setSearchString] = useState("Ant man")
    const [heroQueryData, setHeroQueryData] = useState([])

    function handleInput(e) {
        const input = e.target.value
        setInputValue(input)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setSearchString(inputValue)
        setInputValue("")
    }

    useEffect(() => {
        async function searchAPI() {
            const response = await fetch(`https://superheroapi.com/api/243602908490010/search/${searchString}`)
            const data = await response.json()
            const heroData = data.results.map(s => s.hero)
            setHeroQueryData(heroData)
        }
        searchAPI()
    }, [searchString])

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input value = {inputValue} type="text" required onChange={handleInput} />
            <input type="submit" value="Search" />
        </form>
        {heroQueryData.map((hero) => <HeroCard hero = {hero}/>)}
        </>
    )
    
}