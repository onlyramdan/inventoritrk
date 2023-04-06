import { Navbar, Container, Nav } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import SideBar from "./components/sidebar/SideBar";
import Buku from "./components/buku/Buku";

function App() {
  return (
    <div>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="" src="" width="" height="" className="d-inline-block align-top" />
            {""}
            TEKNIK KOMPUTER
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <h6>Nur Zharifah</h6>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <SideBar />
      <Buku />
    </div>
  );
}

export default App;
