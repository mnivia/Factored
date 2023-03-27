import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logoFactored.png';

function BrandExample() {
  return (
    <>      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          <div className="d-flex align-items-center justify-content-between">
            <p>< img style={{ width: '200px', }} src={logo} className="App-logo" alt="logo" />  </p>
            <p>
            <h1 >EMPLOYEE PROFILES</h1>
            </p>
            
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;