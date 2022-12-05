import "./Contato.css";
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

const Contato = () => {
  return (
    <div className="contato">
      <Header />
      <Row className="ctt-row">
        <Col md="8">
          <Card className="ctt-card">
            <CardHeader>
              <CardTitle
                style={{ color: "white", textAlign: "center", fontSize: "2em" }}
              >
                Contato
              </CardTitle>
            </CardHeader>

            <CardBody>
              <Col>
                <Label>Nome</Label>
                <Input />
              </Col>
              <Col>
                <Label>Email</Label>
                <Input type="email" />
              </Col>
              <Col>
                <Label>Corpo de mensagem</Label>
                <Input type="textarea" rows="10" cols="30" />
              </Col>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Contato;
