import { Route, Routes } from 'react-router'
import { Header } from './components'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<p>Album</p>} />
          <Route path="/unbox" element={<p>Unbox</p>} />
          <Route path="/*" element={<p>404</p>} />
        </Routes>
      </main>
      <footer></footer>
    </>
  )
}

export default App
