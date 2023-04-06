import { Container, Row, Col, Figure } from "react-bootstrap";

function Buku() {
  return (
    <div className="buku bg-white">
      <Container>
        <Row>
          <Col>
            <Figure.Image
              width={171}
              height={180}
              alt="172x180"
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sederet.com%2Ftutorial%2Fidiom-tentang-buku%2F&psig=AOvVaw32n1r6G6KHYsQ7uHzJ4pfn&ust=1680823909636000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKiprpPzk_4CFQAAAAAdAAAAABAJ"
            />
            <Figure.Caption>
                <p>loredasdasdasd
                </p>
            </Figure.Caption>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
export default Buku;
