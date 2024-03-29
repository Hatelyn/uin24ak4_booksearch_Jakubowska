export default function Home({ books }) {
    console.log("me the book " + books)
    return (
        <section>
            <div id="homeIntro">
                <h1>Where will you travel to today?</h1>
            </div>
            <h2>Today's companion recommendation: James Bond</h2>
            <div>
                {books?.map(product =>
                    <article key={product.key}>
                        <h4>{product.title}</h4>
                        <img src={`https://covers.openlibrary.org/b/id/${product.cover_i}-M.jpg`} alt="book picture" />
                        <p>Author/s: {product.author_name}</p>
                        <p>First publish: {product.first_publish_year}</p>
                        <p>Average rating: {product.ratings_average ? product.ratings_average : "No data"}</p>
                        <button>A_id: {product.amazon_id}</button>
                        {/*https://www.amazon.com/s?k=0395082544*/}
                    </article>
                )}
            </div>
        </section>
    )
}