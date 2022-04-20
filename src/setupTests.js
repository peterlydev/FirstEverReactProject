// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import {render, screen} from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import FavouriteMusic from './components/FavouriteMusic'
// import ArtistSongs from './components/ArtistSongs';

// describe ('FavouriteMusic', () => {
//     beforeEach(() => render(<FavouriteMusic />))


// }

describe('App', () => {
    beforeEach(() => {
        render(<FavouriteMusic />)
    })

    // test('it loads the artist name', () => {
    //     const artist = screen.getByRole('artists');
    //     expect(artist.textContent).toBe('J Cole');
    // });

    // test('it loads the genre', () => {
    //     const song = screen.getByRole('genre');
    //     expect(song.textContent).toBe('Genre: Hip-Hop');
    // });

    test('it loads the artist name', () => {
        const artist = screen.getByRole('artists');
        expect(artist.textContent).toBe('Meatloaf');
    });

    test('it loads the artist name', () => {
        const artist = screen.getByRole('genre');
        expect(artist.textContent).toBe('Genre: Rock');
    });

    test('it loads the artist name', () => {
        const artist = screen.getByRole('description');
        expect(artist.textContent).toBe('Voice of an angel, face of a gargoyle');
    });
})
