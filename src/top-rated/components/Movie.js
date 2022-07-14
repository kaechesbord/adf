const Movie = (props) => {
    const {movie} = props;
    return(
        <div ><img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="" /></div>
    )
}
export default Movie