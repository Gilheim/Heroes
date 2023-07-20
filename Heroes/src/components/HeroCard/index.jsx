export default function HeroCard({hero}) {
    return(
        <div  className="hero-card">
            <div>
                {hero.image ? <img src={hero.image.url} alt="" /> : ""}
            </div>
            <div>
                <h2>{hero.name}</h2>
                <p>{hero.powerstats}, {hero.appearance}</p>
                <p>{hero.biography}</p>
            </div>
        </div>
        
    )
}