import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Image, Container, Col, Row, Card } from 'react-bootstrap';
import image from "./assets/car (0).webp"
import Kart from './components/Kart';
import CAR_LIST from "./data/car_list.js";
function App() {

  const cardList = CAR_LIST.map(item => (
    <Col key={item.id} xs={12} md={6} lg={3} style={{ marginBottom: "8px", marginTop: "8px" }} >
      <Kart item={item} />
    </Col>
  ));
  return (
    <>
      <Navbar />
      <Image src={image} fluid />

      <Container className="justify-content-center" fluid style={{ margin: "8px" }}>
        <Row  >{cardList}</Row>
      </Container>

      <Footer />
    </>
  );
}

export default App;
