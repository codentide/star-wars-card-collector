import { Route, Routes } from 'react-router'
import { Header } from './components'
import { AlbumPage, StickerDetailPage, UnboxPage } from './pages'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<AlbumPage />}>
            <Route path="/:category/:id" element={<StickerDetailPage />} />
          </Route>
          <Route path="/unbox" element={<UnboxPage />} />
          <Route path="/*" element={<p>404</p>} />
        </Routes>
      </main>
    </>
  )
}

export default App
