import { useEffect, useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Search from './components/Search'
import BookCard from './components/BookCard'

function App() {

  //Variables for 1. books array taken from API, 
  //2. current query search, start with "home" value "James Bond", 3. previous search, so search page doesn't start with "James Bond" after first search
  const [books, setBooks] = useState([])
  const [query, setQuery] = useState("James Bond")
  const [prevSearch, setPrevSearch] = useState("James Bond")

  //Async function calling to API for fetching data
  const getBooks = async () => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${query}`)
      const data = await response.json()
      setBooks(data.docs)
    } catch {
      console.error("Failed to fetch")
    }
  }

  //useEffect to run fetch request with page start
  useEffect(() => {
    getBooks()
  }, [query])

  //Returning Layout component with routes as children for dynamic routing.
  return (
    <Layout>
      <Routes>
        <Route index element={<Home books={books} setQuery={setQuery} query={query} />} />
      
        <Route path="search" element={<Search books={books} setQuery={setQuery} query={query} prevSearch={prevSearch} setPrevSearch={setPrevSearch} />} />
        <Route path='works/:slug' element={<BookCard />} />
      </Routes>
    </Layout>
  )
}

export default App
