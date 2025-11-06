import { Route, Routes } from 'react-router'
import { Header } from './components'
import { AlbumPage } from './pages/Album.page'
import { UnboxPage } from './pages/Unbox.page'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<AlbumPage />} />
          <Route path="/unbox" element={<UnboxPage />} />
          <Route path="/*" element={<p>404</p>} />
        </Routes>
      </main>
      <footer></footer>
    </>
  )
}

export default App
