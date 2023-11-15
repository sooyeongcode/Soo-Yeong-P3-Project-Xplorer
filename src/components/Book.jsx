

const Book = ({ book }) => {
    const { title, publish_date, overview, poster_path } = book;
    
    const posterUrl = poster_path;
    
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
                <h5><span style={{fontWeight: 'lighter' }}>{formatReleaseDate(publish_date)}</span></h5>
                <p className='overviewText'>{overview}</p>
            </div>
        </div>
    );
};

export default Book;