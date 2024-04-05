import { Rating } from "@mui/material"
import { useEffect } from "react"
import SearchResults from "./SearchResults"

export default function Home({ books, setQuery, query, setBookPage }) {

    useEffect(() => {
        setQuery("James Bond")
    }, [])

    
    return (
        <section>
            <div className="intro">
                <h1>Where will you travel to today?</h1>
            </div>
            <h2>Today's recommendation: {query}</h2>
            <SearchResults books={books} setBookPage={setBookPage} />
        </section>
    )
}