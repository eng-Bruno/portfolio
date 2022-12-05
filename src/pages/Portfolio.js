import "./Portfolio.css";
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
  Input,
} from "reactstrap";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Header />
      <div className="text-center">
        <h1 style={{ color: "white" }}>Projetos</h1>
      </div>
      <br />
      <Row className="row-pt">
        <Col md="3">
          <Card>
            <img alt="Sample" src="" />
            <CardHeader>
              Sigaa+
              <div className="text-end">
                <img alt="" src="" />
                <img alt="" src="" />
                <img alt="" src="" />
              </div>
            </CardHeader>
            <CardBody>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing, elit diam
                condimentum torquent sem, risus euismod himenaeos litora
                phasellus.
              </p>
            </CardBody>
            <Button>Visualizar</Button>
          </Card>
        </Col>
        <Col md="3">
          <Card>
            <img alt="Sample" src="" />
            <CardHeader>
              Em breve
              <div className="text-end">
                <img alt="" src="" />
                <img alt="" src="" />
                <img alt="" src="" />
              </div>
            </CardHeader>
            <CardBody>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing, elit diam
                condimentum torquent sem, risus euismod himenaeos litora
                phasellus.
              </p>
            </CardBody>
            <Button>Visualizar</Button>
          </Card>
        </Col>
        <Col md="3">
          <Card>
            <img alt="Sample" src="" />
            <CardHeader>
              Em breve
              <div className="text-end">
                <img alt="" src="" />
                <img alt="" src="" />
                <img alt="" src="" />
              </div>
            </CardHeader>
            <CardBody>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing, elit diam
                condimentum torquent sem, risus euismod himenaeos litora
                phasellus.
              </p>
            </CardBody>
            <Button>Visualizar</Button>
          </Card>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <Row className="row-pt">
        <Col md="3">
          <Card>
            <img alt="Sample" src="" />
            <CardHeader>
              Sigaa+
              <div className="text-end">
                <img alt="" src="" />
                <img alt="" src="" />
                <img alt="" src="" />
              </div>
            </CardHeader>
            <CardBody>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing, elit diam
                condimentum torquent sem, risus euismod himenaeos litora
                phasellus.
              </p>
            </CardBody>
            <Button>Visualizar</Button>
          </Card>
        </Col>
        <Col md="3">
          <Card>
            <img alt="Sample" src="" />
            <CardHeader>
              Em breve
              <div className="text-end">
                <img alt="" src="" />
                <img alt="" src="" />
                <img alt="" src="" />
              </div>
            </CardHeader>
            <CardBody>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing, elit diam
                condimentum torquent sem, risus euismod himenaeos litora
                phasellus.
              </p>
            </CardBody>
            <Button>Visualizar</Button>
          </Card>
        </Col>
        <Col md="3">
          <Card>
            <img alt="Sample" src="" />
            <CardHeader>
              Em breve
              <div className="text-end">
                <img alt="" src="" />
                <img alt="" src="" />
                <img alt="" src="" />
              </div>
            </CardHeader>
            <CardBody>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing, elit diam
                condimentum torquent sem, risus euismod himenaeos litora
                phasellus.
              </p>
            </CardBody>
            <Button>Visualizar</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Portfolio;
