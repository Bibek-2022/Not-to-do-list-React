import React from "react";
import { Form, Table, Button } from "react-bootstrap";

const BadList = ({ badLists, removeFromBadList, shiftToTaskList }) => {
  return (
    <div>
      <h2 className="text-center">Bad List</h2>
      <hr />
      {/* task list */}
      <Table striped bordered hover>
        <tbody>
          {badLists.map((item, i) => {
            return (
              <>
                <tr key={i}>
                  <td>
                    <Form.Check type="checkbox" label="Check me out" />
                  </td>
                  <td>{item.task}</td>
                  <td>{item.hr}Hour</td>
                  <td className="text-end">
                    <Button variant="warning">
                      <i
                        className="fa-solid fa-arrow-left-long"
                        onClick={shiftToTaskList(i)}
                      ></i>
                    </Button>{" "}
                    <Button variant="danger">
                      <i
                        className="fa-solid fa-trash-can"
                        onClick={removeFromBadList(i)}
                      ></i>
                    </Button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
      <h4 className="mt-5 text-danger">You could have saved:20hrs</h4>
    </div>
  );
};

export default BadList;
