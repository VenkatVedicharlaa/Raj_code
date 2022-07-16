import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Stack, Table } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

export default function App() {
  const [state, setState] = useState([]);
  const getAll = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => {});
  };

  // const getOne = () => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts/100")
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {});
  // };

  const deleteOne = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/ ${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {});
  };
  return (
    <>
      <div className="col-md-9 mx-auto">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {state.slice(1, 10).map((data) => (
              <tr>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.body}</td>
                <button
                  onClick={() => {
                    deleteOne(data.id);
                  }}
                >
                  delete
                </button>
              </tr>
            ))}
          </tbody>
        </Table>
        <Stack className=" col-md-3 mx-auto">
          <button
            className="btn bg-success"
            onClick={() => {
              getAll();
            }}
          >
            click
          </button>
        </Stack>
      </div>
    </>
  );
}
