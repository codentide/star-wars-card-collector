import { Route, Routes } from 'react-router'
import { Header } from './components'
import { AlbumPage } from './pages/Album.page'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<AlbumPage />} />
          <Route path="/unbox" element={<p>Unbox</p>} />
          <Route path="/*" element={<p>404</p>} />
        </Routes>
      </main>
      <footer></footer>
    </>
  )
}

export default App
