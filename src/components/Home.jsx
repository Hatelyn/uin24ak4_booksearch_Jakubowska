import { Rating } from "@mui/material"
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
                        <p>Author/s: {product.author_name ? product.author_name.join(", ") : "Unknown author"}</p> {/* Fortsette å hadde undefinied error, så kom til at det må være noen bok som ikke har en forfatter */}
                        <p>First publish: {product.first_publish_year}</p>
                        {product.ratings_average > 0 ? <p>Rating: {product.ratings_average.toFixed(1)}<br />
                            <Rating name="read-only" value={product.ratings_average} precision={0.5} readOnly className="rating" /></p>
                            :
                            <p>No rating given <br />
                                <Rating name="no-value" value={null} readOnly className="rating" /></p>}
                        {product.id_amazon?.[0]?.length > 0 ?
                            <button><a href={`https://www.amazon.com/s?k=${product.id_amazon[0]}`}>Buy on Amazon</a></button>
                            :
                            <button disabled>Out of stock</button>}

                    </article>
                )}
            </div>
        </section>
    )
}