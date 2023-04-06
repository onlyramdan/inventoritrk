import { Container, Row, Col, Figure, Card, Button } from "react-bootstrap";
import SearchForm from "../SearchForm/SearchForm";

function Buku() {
  return (
    <div className="buku bg-grey">
      <h4>Mau Pinjam Buku Apa Hari Ini?</h4>
      <br></br>

      <Container className="text-center">
        <Row>
          <Col className="mb-2">
            <Button size="sm">All</Button>
          </Col>
          <Col className="mb-2">
            <Button size="sm">Hardware</Button>
          </Col>
          <Col className="mb-2">
            <Button size="sm">Jaringan</Button>
          </Col>
          <Col className="mb-2">
            <Button size="sm">Internet of Things</Button>
          </Col>
          <Col className="mb-2">
            <Button size="sm">Informatika</Button>
          </Col>
          <Col className="mb-2">
            <Button size="sm">Machine Learning</Button>
          </Col>
        </Row>
      </Container>
      <Card className="card-buku bg-white">
        <Card.Body>
          <Row className="mt-2">
            <h4>Hardware</h4>
          </Row>
          <Row className="text-center">
            <Col>
              <Figure.Image
                width={171}
                height={180}
                alt="172x180"
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sederet.com%2Ftutorial%2Fidiom-tentang-buku%2F&psig=AOvVaw32n1r6G6KHYsQ7uHzJ4pfn&ust=1680823909636000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKiprpPzk_4CFQAAAAAdAAAAABAJ"
              />
              <Figure.Caption>
                <p>loredasdasdasd</p>
              </Figure.Caption>
            </Col>
            <Col>
              <Figure.Image
                width={171}
                height={180}
                alt="172x180"
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sederet.com%2Ftutorial%2Fidiom-tentang-buku%2F&psig=AOvVaw32n1r6G6KHYsQ7uHzJ4pfn&ust=1680823909636000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKiprpPzk_4CFQAAAAAdAAAAABAJ"
              />
              <Figure.Caption>
                <p>loredasdasdasd</p>
              </Figure.Caption>
            </Col>
            <Col>
              <Figure.Image
                width={171}
                height={180}
                alt="172x180"
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sederet.com%2Ftutorial%2Fidiom-tentang-buku%2F&psig=AOvVaw32n1r6G6KHYsQ7uHzJ4pfn&ust=1680823909636000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKiprpPzk_4CFQAAAAAdAAAAABAJ"
              />
              <Figure.Caption>
                <p>loredasdasdasd</p>
              </Figure.Caption>
            </Col>
          </Row>
          <Row className="mt-5">
            <h4>Jaringan</h4>
          </Row>
          <Row className="text-center">
            <Col>
              <Figure.Image
                width={171}
                height={180}
                alt="172x180"
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sederet.com%2Ftutorial%2Fidiom-tentang-buku%2F&psig=AOvVaw32n1r6G6KHYsQ7uHzJ4pfn&ust=1680823909636000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKiprpPzk_4CFQAAAAAdAAAAABAJ"
              />
              <Figure.Caption>
                <p>loredasdasdasd</p>
              </Figure.Caption>
            </Col>
            <Col>
              <Figure.Image
                width={171}
                height={180}
                alt="172x180"
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sederet.com%2Ftutorial%2Fidiom-tentang-buku%2F&psig=AOvVaw32n1r6G6KHYsQ7uHzJ4pfn&ust=1680823909636000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKiprpPzk_4CFQAAAAAdAAAAABAJ"
              />
              <Figure.Caption>
                <p>loredasdasdasd</p>
              </Figure.Caption>
            </Col>
            <Col>
              <Figure.Image
                width={171}
                height={180}
                alt="172x180"
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sederet.com%2Ftutorial%2Fidiom-tentang-buku%2F&psig=AOvVaw32n1r6G6KHYsQ7uHzJ4pfn&ust=1680823909636000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKiprpPzk_4CFQAAAAAdAAAAABAJ"
              />
              <Figure.Caption>
                <p>loredasdasdasd</p>
              </Figure.Caption>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Buku;
