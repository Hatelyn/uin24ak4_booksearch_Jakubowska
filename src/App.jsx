import { useEffect, useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Search from './components/Search'
import BookCard from './components/BookCard'

function App() {

  const [books, setBooks] = useState([])
  const [query, setQuery] = useState("James Bond")
  const [prevSearch, setPrevSearch] = useState("James Bond")
  const [bookPage, setBookPage] = useState("")


  const getBooks = async () => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${query}`)
      const data = await response.json()
      setBooks(data.docs)
    } catch {
      console.error("Failed to fetch")
    }
  }

  useEffect(() => {
    getBooks()
  }, [query])

  return (
    <Layout>
      <Routes>
        <Route index element={<Home books={books} setQuery={setQuery} query={query} setBookPage={setBookPage} />} />
      
        <Route path="search" element={<Search books={books} setQuery={setQuery} query={query} prevSearch={prevSearch} setPrevSearch={setPrevSearch} setBookPage={setBookPage} />} />
        <Route path='works/:slug' element={<BookCard />} />
      </Routes>
    </Layout>
  )
}

export default App
