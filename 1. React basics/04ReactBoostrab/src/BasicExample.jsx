import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BasicExample() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "2rem",
          flexWrap: "wrap",
        }}
      >
        <Card style={{ width: "18rem", marginTop: "2rem" }}>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiHNJoV0BgStRL8pcVli4hSQFzFwmB-kOVVMlHgO3_WQ&s"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", marginTop: "2rem" }}>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiHNJoV0BgStRL8pcVli4hSQFzFwmB-kOVVMlHgO3_WQ&s"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", marginTop: "2rem" }}>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiHNJoV0BgStRL8pcVli4hSQFzFwmB-kOVVMlHgO3_WQ&s"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", marginTop: "2rem" }}>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiHNJoV0BgStRL8pcVli4hSQFzFwmB-kOVVMlHgO3_WQ&s"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default BasicExample;
