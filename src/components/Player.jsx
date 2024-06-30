import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Player(props) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <img src={props.image} width="100" />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.age}</Card.Text>
          <Button variant="primary">{props.team}</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Player;
