import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

const initialState = {
  task: "",
  hr: "",
};
const AddForm = ({ addToTaskList }) => {
  const [newInfo, setNewInfo] = useState(initialState);

  console.log(newInfo);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setNewInfo({
      ...newInfo,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addToTaskList(newInfo);
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Row className="g-2">
          <Col md={7}>
            <Form.Control
              name="task"
              placeholder="Tasks..."
              onChange={handleOnChange}
              type="text"
              required
            />
          </Col>
          <Col md={3}>
            <Form.Control
              name="hr"
              placeholder="Hour"
              onChange={handleOnChange}
              type="number"
              required
            />
          </Col>
          <Col md={2}>
            <Button variant="primary" type="submit">
              {" "}
              Add Task
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AddForm;
