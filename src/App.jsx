import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Navbar from './layouts/Navbar'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home'
import About from './pages/About'
import Posts from './pages/Posts'


function App() {


  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route Component={DefaultLayout}>
            {/* rotta principale con layout in comune */}

            <Route path='/' Component={Home}></Route>
            <Route path='/about' Component={About}></Route>
            <Route path='/posts' Component={Posts}></Route>

          </Route>
          
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App
