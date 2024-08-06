import { Route, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import HomePage from "./pages/HomePage"
import FavoritesPage from "./pages/FavoritesPage"
import RecipePage from "./pages/RecipePage"
import AboutPage from "./pages/AboutPage"

const App = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/recipe/:label" element={<RecipePage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
