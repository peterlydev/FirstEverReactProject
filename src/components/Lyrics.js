import React, {useState, useEffect} from 'react';

function Lyrics(){
    const [lyrics, setLyrics] = useState(0);
    

    useEffect(() => {
        async function getLyrics(){
            const resp = await fetch('https://private-amnesiac-0d5df9-lyricsovh.apiary-proxy.com/v1/Sara%20Bareilles/Love%20Song')
            const data = await resp.json()
            console.log(data)
            setLyrics(data.lyrics)
        }
        getLyrics()
        
    }, [])

    return(
        <div>
        <p> { lyrics } </p>

        </div>

    )

}

export default Lyrics
