import React, { useState } from 'react';
const ArtistSongs = () => {
    const [songs] = useState([
        {name: '4 Your Eyez Only', year: 2016, img: "https://upload.wikimedia.org/wikipedia/en/b/bb/J._Cole_%E2%80%94_4_Your_Eyez_Only_album_cover.jpg"},
        {name: 'KOD', year: 2018, img: "https://upload.wikimedia.org/wikipedia/en/d/d3/JColeKOD.jpg"},
        {name: 'The Off-Season', year: 2021, img: "https://upload.wikimedia.org/wikipedia/en/7/7d/TheOff-Season.jpeg"},
        {name: 'Iowa', year: 2001, img: "https://upload.wikimedia.org/wikipedia/en/1/1d/Slipknot_Iowa.jpg"},
        {name: 'All Hope Is Gone', year: 2008, img: "https://upload.wikimedia.org/wikipedia/en/a/a9/All_Hope_is_Gone_%28original%29.jpg"},
        {name: 'We Are Not Your Kind', year: 2019, img: "https://upload.wikimedia.org/wikipedia/en/1/18/Slipknot_-_We_Are_Not_Your_Kind.png"}
    ])

    const renderRows = () => {
        // eslint-disable-next-line jsx-a11y/alt-text
        return songs.map(p => <tr><td>{p.name}</td><td>{p.year}</td><td><img src={p.img} /></td></tr>)
      }
    
      return (
        <table style={{ border: "1px solid black", width: "100vw", textAlign: "center" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Year</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            { renderRows() }
          </tbody>
        </table>
      );
    };
    
    export default ArtistSongs;
