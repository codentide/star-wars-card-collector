import { Route, Routes } from 'react-router'
import { Header } from './components'
import { AlbumPage } from './pages/Album.page'
import { UnboxPage } from './pages/Unbox.page'

function App() {
  console.log(import.meta.env.VITE_BASE_URL)
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<AlbumPage />}>
            <Route path="/:category/:id" element={'HOLAAA'} />
          </Route>
          <Route path="/unbox" element={<UnboxPage />} />
          <Route path="/*" element={<p>404</p>} />
        </Routes>
      </main>
      <footer></footer>
    </>
  )
}

export default App
