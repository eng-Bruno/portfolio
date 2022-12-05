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
          <Card
            className="port-card"
            style={{ backgroundColor: "rgb(36, 0, 36)", opacity: "75%" }}
          >
            <img alt="Sample" src="" />
            <CardHeader style={{ color: "white", fontSize: "25px" }}>
              Sigaa+
              <div className="text-end">
                <img
                  alt="Javascript"
                  height="30"
                  width="40"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                />
                <img
                  alt="Javascript"
                  height="30"
                  width="40"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg"
                />
                <img
                  height="30"
                  width="40"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
                />
              </div>
            </CardHeader>
            <CardBody>
              <p style={{ color: "white" }}>
                Lorem ipsum dolor sit amet consectetur adipiscing, elit diam
                condimentum torquent sem, risus euismod himenaeos litora
                phasellus.
              </p>
            </CardBody>
            <Button>Visualizar</Button>
          </Card>
        </Col>
        <Col md="3">
          <Card
            className="port-card"
            style={{ backgroundColor: "rgb(36, 0, 36)", opacity: "75%" }}
          >
            <img alt="Sample" src="" />
            <CardHeader style={{ color: "white", fontSize: "25px" }}>
              Em breve
              <div className="text-end">
                <img alt="" src="" />
                <img alt="" src="" />
                <img alt="" src="" />
              </div>
            </CardHeader>
            <CardBody>
              <p style={{ color: "white" }}>
                Lorem ipsum dolor sit amet consectetur adipiscing, elit diam
                condimentum torquent sem, risus euismod himenaeos litora
                phasellus.
              </p>
            </CardBody>
            <Button>Visualizar</Button>
          </Card>
        </Col>
        <Col md="3">
          <Card style={{ backgroundColor: "rgb(36, 0, 36)", opacity: "75%" }}>
            <img alt="Sample" src="" />
            <CardHeader style={{ color: "white", fontSize: "25px" }}>
              Em breve
              <div className="text-end">
                <img alt="" src="" />
                <img alt="" src="" />
                <img alt="" src="" />
              </div>
            </CardHeader>
            <CardBody>
              <p style={{ color: "white" }}>
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
          <Card
            className="port-card"
            style={{ backgroundColor: "rgb(36, 0, 36)", opacity: "75%" }}
          >
            <img alt="Sample" src="" />
            <CardHeader style={{ color: "white", fontSize: "25px" }}>
              Em breve
              <div className="text-end">
                <img alt="" src="" />
                <img alt="" src="" />
                <img alt="" src="" />
              </div>
            </CardHeader>
            <CardBody>
              <p style={{ color: "white" }}>
                Lorem ipsum dolor sit amet consectetur adipiscing, elit diam
                condimentum torquent sem, risus euismod himenaeos litora
                phasellus.
              </p>
            </CardBody>
            <Button>Visualizar</Button>
          </Card>
        </Col>
        <Col md="3">
          <Card style={{ backgroundColor: "rgb(36, 0, 36)", opacity: "75%" }}>
            <img alt="Sample" src="" />
            <CardHeader style={{ color: "white", fontSize: "25px" }}>
              Em breve
              <div className="text-end">
                <img alt="" src="" />
                <img alt="" src="" />
                <img alt="" src="" />
              </div>
            </CardHeader>
            <CardBody>
              <p style={{ color: "white" }}>
                Lorem ipsum dolor sit amet consectetur adipiscing, elit diam
                condimentum torquent sem, risus euismod himenaeos litora
                phasellus.
              </p>
            </CardBody>
            <Button>Visualizar</Button>
          </Card>
        </Col>
        <Col md="3">
          <Card style={{ backgroundColor: "rgb(36, 0, 36)", opacity: "75%" }}>
            <img alt="Sample" src="" />
            <CardHeader style={{ color: "white", fontSize: "25px" }}>
              Em breve
              <div className="text-end">
                <img alt="" src="" />
                <img alt="" src="" />
                <img alt="" src="" />
              </div>
            </CardHeader>
            <CardBody>
              <p style={{ color: "white" }}>
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
