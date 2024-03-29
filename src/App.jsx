import { useEffect, useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Search from './components/Search'

function App() {

  const [books, setBooks] = useState([])
  const [query, setQuery] = useState("James Bond")
  const [prevSearch, setPrevSearch] = useState("James Bond")

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
        <Route index element={<Home books={books} setQuery={setQuery} />} />
        <Route path="search/*" element={<Search books={books} setQuery={setQuery} query={query} prevSearch={prevSearch} setPrevSearch={setPrevSearch} />}>
        </Route>
      </Routes>
    </Layout>
  )
}

export default App
