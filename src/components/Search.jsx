import { useEffect, useState } from "react"
import SearchResults from "./SearchResults"

export default function Search({ books, setQuery, query, prevSearch, setPrevSearch }) {
    const [search, setSearch] = useState("")

    //useEffect sets page start query to previous one for storing information about our last search rather than it always to be "James Bond"
    useEffect(() => {
        setQuery(prevSearch)
    }, [])

    //If value stored in search variable is longer than 3 characters, then change queries for API calls, else print alert to add more characters
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

    //Stores value of every change in search field
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    //Returning search field html and sending array further to SearchResults component, which prints out data from API call based on searched query
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
            <SearchResults books={books} />
        </section>
    )
}