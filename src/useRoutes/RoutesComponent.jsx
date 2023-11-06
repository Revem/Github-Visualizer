import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import RepositoryInfo from '../pages/RepositoryInfo';
import SearchResults from '../pages/SearchResults';

export default function RoutesComponent() {
  const searchUser = (username) => {
    setUser(username);
  }

  const [user, setUser] = useState()

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home doGetUser={searchUser} />} />
        <Route path="/:id" element={<SearchResults />} />
        <Route path="/:id/:repo" element={<RepositoryInfo />} />
      </Routes>
    </div>
  )
}