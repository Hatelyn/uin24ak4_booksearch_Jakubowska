import { Rating } from "@mui/material"
import { useEffect, useState } from "react"

export default function Search({ books, setQuery, query, prevSearch, setPrevSearch }) {
    const [search, setSearch] = useState("")

    useEffect(() => {
        setQuery(prevSearch)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (search.length >= 3) {
            setQuery(search)
            setPrevSearch(search)
        } else {
            alert("Please add more characters")
            {/*Kilde: https://www.w3schools.com/js/js_popup.asp*/ }
        }
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <section>
            <div className="intro">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="search">Search after book title: </label>
                    <input type="text" id="search" placeholder="James Bond..." onChange={handleChange}></input>
                    <input type="submit" value="Search"></input>
                </form>
            </div>
            <h2>Showing results for: {query}</h2>
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