

const Book = ({ book }) => {
    const { title, publish_date, overview, poster_path, author, subtitle, rate } = book;
    
    const posterUrl = poster_path;
    
    const formatPublishDate = (date) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options);
    };


    return (
        <div className='bookCard'>
            <div className='posterContainer'>
                <img src={posterUrl} alt={title} style={{ width: 'auto', height: '300px' }} />
            </div>
            <div className='infoContainer'>
                <div className='bookHeaderTitle'>
                    <div className='titleDiv'>
                        <h3 className='main'>{title}</h3>
                        <h5 className='rate'>&#9733; {rate}</h5>
                    </div>
                    <h4 className='sub'>{subtitle}</h4>
                    <h5 className='authors'>
                        {Array.isArray(author) ? (
                            author.map((auth, index) => (
                                <span key={index} className='author'>{auth}</span>
                            ))
                        ) : (
                            <span className='author'>{author}</span>
                        )}
                        </h5>
                <h5 className='publishDate'>
                    <span style={{fontWeight: 'lighter' }}>{formatPublishDate(publish_date)}</span></h5>
                </div>
                <p className='overviewText'>{overview}</p>
               
            </div>
        </div>
    );
};

export default Book;