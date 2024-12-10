import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './layouts/Navbar'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home'
import About from './pages/About'
import Posts from './pages/Posts'
import PostDetails from './pages/PostDetails'


function App() {


  return (
    <>
      <BrowserRouter>
        {/* creo un contenitore generale */}
        <div className='container'>
          <Navbar/>
          <Routes>
            <Route Component={DefaultLayout}>
              {/* rotta principale con layout in comune */}

              <Route path='/' Component={Home}></Route>
              <Route path='/about' Component={About}></Route>
              <Route path='/posts' Component={Posts}></Route>
              <Route path='/posts/:id' Component={PostDetails}></Route>

            </Route>
            
          </Routes>
        </div>

      </BrowserRouter>

    </>
  );
}

export default App
