import { useEffect } from "react"
import SearchResults from "./SearchResults"

export default function Home({ books, setQuery, query }) {

    //useEffect sets "home" query to always be "James Bond" with page start
    useEffect(() => {
        setQuery("James Bond")
    }, [])

    //Returning some specific to home page html and sending array further to SearchResults component, which prints out data from API call based on query
    return (
        <section>
            <div className="intro">
                <h1>Where will you travel to today?</h1>
            </div>
            <h2>Today's recommendation: {query}</h2>
            <SearchResults books={books} />
        </section>
    )
}