import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <div className="App">
    <Router>
      <header>
        <h1>Store</h1>
        <Container>
          <Nav defaultActiveKey='/' variant='tabs' >
            <Nav.Item>
              <Nav.Link href='/' >
                <Link to='/' >Home</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              
            </Nav.Item>

          </Nav>
        </Container>
      </header>
      <div className='display'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
