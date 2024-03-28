import { Route, Routes } from "react-router-dom";
import Home from './Home';
import SearchResults from './SearchResults';
import Search from './Search';

export default function Links() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="search/*" element={<Search />}>
      </Route>
    </Routes>
  )
}