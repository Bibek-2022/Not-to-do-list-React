import React from "react";
import { Form, Table, Button } from "react-bootstrap";

const TaskList = ({ taskLists, removeFromTaskList, shiftToTheBadList }) => {
  return (
    <div>
      <h2 className="text-center">Task List</h2>

      <hr />
      {/* task list */}
      <Table striped bordered hover>
        <tbody>
          {taskLists.map((task, i) => (
            <tr key={i}>
              <td>
                <Form.Check type="checkbox" label="Check me out" />
              </td>
              <td>{task.task}</td>
              <td>{task.hr}Hour</td>
              <td className="text-end">
                <Button variant="danger" onClick={() => removeFromTaskList(i)}>
                  <i className="fa-solid fa-trash-can"></i>
                </Button>{" "}
                <Button variant="primary" onClick={() => shiftToTheBadList(i)}>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TaskList;
