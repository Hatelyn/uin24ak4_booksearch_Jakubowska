import { useEffect } from "react"

export default function Home({ books, setQuery }) {

    useEffect(() => {
        setQuery("James Bond")
    }, [])

    return (
        <section>
            <div className="intro">
                <h1>Where will you travel to today?</h1>
            </div>
            <h2>Today's recommendation: James Bond</h2>
            <div>
                {books?.map(product =>
                    <article key={product.key}>
                        <h4>{product.title}</h4>
                        <img src={`https://covers.openlibrary.org/b/id/${product.cover_i}-M.jpg`} alt="book picture" />
                        <p>Author/s: {product.author_name}</p>
                        <p>First publish: {product.first_publish_year}</p>
                        <p>Average rating: {product.ratings_average ? product.ratings_average : "No data"}</p>
                        <button><a href={`https://www.amazon.com/s?k=${product.isbn ? product.isbn[0] : null}`} className={product.isbn ? "inStock" : "empty"}>{product.isbn ? "Buy on Amazon" : "Out of stock"}</a></button>
                    </article>
                )}
            </div>
        </section>
    )
}