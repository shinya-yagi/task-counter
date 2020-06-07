import React, { useState } from "react";
import { Button, Container } from "reactstrap";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Container
        onClick={() => setCount(count + 1)}
        style={{
          height: 240,
          backgroundColor: "lightcyan",
          fontSize: 96,
          alignItems: "center",
        }}
      >
        <div style={{ paddingTop: 48 }}>{count}</div>
      </Container>
      <Button onClick={() => setCount(count - 1)}>-1</Button>
    </div>
  );
}

export default Counter;
