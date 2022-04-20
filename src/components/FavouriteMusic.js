const FavouriteMusic = (props) => {
    return(
        <div role="Content">
        <div role="artists">
            {/* <h1>Favourite Artists</h1> */}
            <h2>{props.artists}</h2>
            </div>
            <div role="genre">
            <p><strong>Genre: </strong>{props.genre}</p>
            </div>
            <div role="description">
            <p>{props.description}</p>
            </div>
            {/* <h2>Slipknot</h2>
            <p><strong>Genre: </strong>Heavy Metal</p>
            <p>American heavy metal band formed in Des Moines, Iowa, in 1995 by percussionist Shawn Crahan, drummer Joey Jordison and bassist Paul Gray</p> */}
        </div>
    )
}

FavouriteMusic.defaultProps = {
    artists: "Meatloaf",
    genre: "Rock",
    description: "Voice of an angel, face of a gargoyle" 
}

export default FavouriteMusic
