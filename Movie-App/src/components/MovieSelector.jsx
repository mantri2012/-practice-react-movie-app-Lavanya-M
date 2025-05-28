import { useState } from 'react'
import movieData from '../movieData';

const MovieSelector = () => {
    const [selectedGenre, setSelectedGenre] = useState("");
    const [isLoading, setIsloading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [movieList, setMovieList] = useState([]);

    const handleFetchMovies = () => {
        // Validate selected genre
        if (!selectedGenre) {
            setErrorMsg("Please select a genre");
            return;
        }
        // Resetting the state before fetching
        setIsloading(true);
        setErrorMsg("");
        setMovieList([]);

        //simulating fetch()
            setTimeout(()=> {
                setMovieList(movieData[selectedGenre]);
                setIsloading(false);
            }, 2000);
    }
        

    return (
        <div className= "movie-selector">
        <h2>Select a Movie Genre</h2>
        <select
            value = {selectedGenre}
            onChange = {(e) => setSelectedGenre(e.target.value)}>
            <option value="">Select a Genre</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Horror">Horror</option>
        </select><br />
        <button onClick = {handleFetchMovies}> Fetch Movies</button> 

        {/* Conditional Rendering of MovieList*/}
        {isLoading && <p>Loading Selected Movies...</p>}
        {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
        {!isLoading && movieList.length > 0 && (
            <ul>
                {movieList.map((movie, index) => (
                    <li key= {index}>{movie}</li>
                ))}
            </ul>
        )}

        {!isLoading && movieList.length == 0 && (
            <p>No movies available for the selected genre.</p>

        )}
        </div>
    );
}
export default MovieSelector;