import { useState, useEffect } from "react"
import React from "react";
import axios from "axios";
import LoadingSpinner from "./loadingSpinner";
import Movie from "./components/Movie";

const TopMovies = () => {
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=ac611aa60fbb0355792b075ff8337fbe&language=en-US&page=1")
            setMovies(data.data.results)
        }
        fetchData()
    }, [])
    return (
        <div className="App">
            {loading ? <LoadingSpinner /> :
                <div className="movies">
                    {movies.map(movie => <Movie  movie = {movie}/>)}
                </div>
            }
        </div>
    )
}
export default TopMovies