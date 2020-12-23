import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap';

export default function Kart(props) {
  const { title, text, imgURL } = props.item;
  const ITEM = props.item;

  const [counter, setCounter] = useState(
    Number(localStorage.getItem(title) || 0)
  );

  const clickHandler = event => {
    event.target.name == "increase"
      ? setCounter(counter + 1)
      : setCounter(counter - 1);
  };
  localStorage.setItem(title, counter);

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imgURL} />
        <Card.Body>
          <Card.Title>{ITEM.title}</Card.Title>
          <Card.Text>
            {ITEM.text}
          </Card.Text>
          <Button variant="primary" style={{ margin: '20px' }} onClick={clickHandler} name="increase">+</Button>
          <span
            style={{
              margin: "auto"
            }}
          >
            {counter}
          </span>
          <Button variant="primary" style={{ margin: '20px' }} onClick={clickHandler} name="decrease">-</Button>
        </Card.Body>
      </Card>
    </>
  )
}



