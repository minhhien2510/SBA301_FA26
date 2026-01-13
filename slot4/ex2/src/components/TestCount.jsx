import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function TestCount() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Card className="text-center mb-4 shadow-sm">
      <Card.Body>
        <Card.Title>🔢 Test Count</Card.Title>

        <h2 className="my-3">{count}</h2>

        <div className="d-flex justify-content-center gap-3">
          <Button
            variant="danger"
            onClick={handleDecrease}
            disabled={count === 0}
          >
            -
          </Button>

          <Button variant="success" onClick={handleIncrease}>
            +
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TestCount;
