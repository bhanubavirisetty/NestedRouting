import React from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Home from './Home'
import About  from './About'

function Header()
{
  return (
    <>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
    </>
  );
}
function App()
{
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App