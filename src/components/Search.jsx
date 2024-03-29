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