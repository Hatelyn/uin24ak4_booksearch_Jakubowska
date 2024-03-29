import { useEffect, useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Search from './components/Search'

function App() {

  const [books, setBooks] = useState([])

  const getBooks = async () => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=james+bond`)
      const data = await response.json()
      setBooks(data.docs)
    } catch {
      console.error("Failed to fetch James Bond")
    }
  }

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <Layout>
      <Routes>
        <Route index element={<Home books={books} />} />
        <Route path="search/*" element={<Search />}>
        </Route>
      </Routes>
    </Layout>
  )
}

export default App
