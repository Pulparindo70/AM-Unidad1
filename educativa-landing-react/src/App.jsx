import AppRoutes from './routes'
import Header from './components/Header'
import Footer from './components/Footer'
import Preload from './components/Preload'

function App() {
  return (
    <>
      <Preload />
      <Header />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App
