

const Book = ({ book }) => {
    const { title, release_date, overview, poster_path } = book;
    
    const baseUrl ='https://image.tmdb.org/t/p/w500';
    const posterUrl = baseUrl + poster_path;
    
    const formatReleaseDate = (date) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options);
    };


    return (
        <div className='bookCard'>
            <div className='posterContainer'>
                <img src={posterUrl} alt={title} style={{ width: '160px', height: '100%' }} />
            </div>
            <div className='infoContainer'>
                <h4>{title}</h4>
                <h5>{formatReleaseDate(release_date)}</h5>
                <p className='overviewText'>{overview}</p>
                <h6>Name</h6>
            </div>
        </div>
    );
};

export default Book;