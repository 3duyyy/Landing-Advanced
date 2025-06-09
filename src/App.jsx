import Footer from './components/footer'
import Hero from './components/hero'
import Product from './components/products'
import Service from './components/service'
import Signup from './components/signup'

function App() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Service />
      <Product />
      <Signup />
      <Footer />
    </div>
  )
}

export default App
