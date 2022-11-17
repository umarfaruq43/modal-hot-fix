import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Modal from './components/modal/Modal'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Nft from './pages/NFT/Nft'
import Routing from './routing/router'

function App() {


  return (
    <Router>
      <div className="App font-redrose">
        <Navbar />
        <Routing />
        <Footer />
      </div>
    </Router>
  )
}

export default App
