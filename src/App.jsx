import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './layouts/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Posts from './pages/Posts'


function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/about' Component={About}></Route>
          <Route path='/posts' Component={Posts}></Route>
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App
