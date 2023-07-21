import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer';
import { Routes, Route, } from 'react-router-dom'
import Home from './pages/Index/Home';
import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Category from './pages/Products/Category';



function App() {


  return (

    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='category/:id' element={<Category />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>

  )
}

export default App
