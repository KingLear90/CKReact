import './App.css'
import './styles/Header.css'
import './styles/Home.css'
import './styles/Features.css'
import './styles/Footer.css'
import './styles/Aprendizaje.css'
import './styles/Gallery.css'
import './styles/Contact.css'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.tsx';


function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
