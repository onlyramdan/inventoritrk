import { Container, Button, Row } from "react-bootstrap";

function SideBar() {
  return (
    <div className="sidebar p-4 bg-white" id="sidebar">
      <Container>
        <Row className="text-center">
          <h5>Beranda</h5>
        </Row>
        <Row className="text-center">Inventori Barang</Row>
        <Row className="text-center">Inventori Buku</Row>
        <Row className="text-center">Pinjam Ruangan</Row>
      </Container>
    </div>
  );
}

export default SideBar;
