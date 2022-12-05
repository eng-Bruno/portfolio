import "./Home.css";
import Header from "../components/Header";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Spinner,
  Progress,
  Label,
  CardSubtitle,
  CardTitle,
} from "reactstrap";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="text-center">
        <h1 style={{ color: "white" }}>Bruno Oliveira</h1>
      </div>
      <br />
      <Row>
        <Col md="5">
          <Card>
            <CardHeader className="border-bottom" style={{ minHeight: "7vh" }}>
              <h6>Pequeno Resumo sobre mim</h6>
            </CardHeader>

            <CardBody className="text-center" style={{ Height: "15vh" }}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing, elit diam
                condimentum torquent sem, risus euismod himenaeos litora
                phasellus. Euismod etiam primis mi dignissim duis class posuere,
                ultrices iaculis facilisi semper a luctus velit, venenatis
                bibendum pellentesque vestibulum inceptos consequat. Himenaeos
                ac aliquam nibh eu tellus tempus potenti mollis nostra, eros
                lacus parturient maximus varius elit consectetur placerat
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col md="5">
          <Card>
            <CardHeader className="border-bottom" style={{ minHeight: "7vh" }}>
              <h6>Habilidades</h6>
            </CardHeader>

            <CardBody className="text-center" style={{ Height: "15vh" }}>
              <CardSubtitle style={{ fontSize: "12px", textAlign: "start" }}>
                React
              </CardSubtitle>
              <Progress animated="true" className="my-2" value="50">
                50%
              </Progress>
              <br />
              <CardSubtitle style={{ fontSize: "12px", textAlign: "start" }}>
                Javascript
              </CardSubtitle>
              <Progress animated="true" className="my-2" value="50">
                50
              </Progress>
              <br />
              <CardSubtitle style={{ fontSize: "12px", textAlign: "start" }}>
                Node
              </CardSubtitle>
              <Progress animated="true" className="my-2" value="50">
                50
              </Progress>
              <br />
              <CardSubtitle style={{ fontSize: "12px", textAlign: "start" }}>
                MySQL
              </CardSubtitle>
              <Progress animated="true" className="my-2" value="30">
                30
              </Progress>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col md="5">
          <Card>
            <CardHeader>
              <h6>Lorem ipsum dolor</h6>
            </CardHeader>

            <CardBody className="text-center" style={{ Height: "15vh" }}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing, elit diam
                condimentum torquent sem, risus euismod himenaeos litora
                phasellus. Euismod etiam primis mi dignissim duis class posuere,
                ultrices iaculis facilisi semper a luctus velit, venenatis
                bibendum pellentesque vestibulum inceptos consequat. Himenaeos
                ac aliquam nibh eu tellus tempus potenti mollis nostra, eros
                lacus parturient maximus varius elit consectetur placerat
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col md="5">
          <Card>
            <CardHeader>
              <h6>Lorem ipsum dolor</h6>
            </CardHeader>

            <CardBody className="text-center" style={{ Height: "15vh" }}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing, elit diam
                condimentum torquent sem, risus euismod himenaeos litora
                phasellus. Euismod etiam primis mi dignissim duis class posuere,
                ultrices iaculis facilisi semper a luctus velit, venenatis
                bibendum pellentesque vestibulum inceptos consequat. Himenaeos
                ac aliquam nibh eu tellus tempus potenti mollis nostra, eros
                lacus parturient maximus varius elit consectetur placerat
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
