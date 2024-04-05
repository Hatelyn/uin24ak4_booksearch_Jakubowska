import { useEffect, useState } from "react"
import SearchResults from "./SearchResults"

export default function Search({ books, setQuery, query, prevSearch, setPrevSearch, setBookPage }) {
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
            <SearchResults books={books} setBookPage={setBookPage} />
        </section>
    )
}