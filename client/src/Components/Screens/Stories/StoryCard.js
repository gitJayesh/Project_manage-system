// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Row";

function StoryCard({ story }) {
  const { _id, storyname, description } = story;
  return (
    <Col>
      <Card>
        <Card.Title>
          <Card.Header>{storyname}</Card.Header>
        </Card.Title>
        <Card.Body>
          {/* <Card.Title>Special title treatment</Card.Title> */}
          <Card.Text className="card-text-clamp">{description}</Card.Text>
          <Link
            to={`/story/${_id}`}
            variant="primary"
            style={{ textDecoration: "none" }}
          >
            Open Story
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default StoryCard;
