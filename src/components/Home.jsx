import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
        setRecords(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const Filter = (event) => {
    const query = event.target.value.toLowerCase();
    setRecords(
      data.filter((f) => {
        return f.name.toLowerCase().includes(query);
      })
    );
  };

  return (
    <>
      <div className="p-5 bg-light">
        <div className="bg-white shadow border">
          <input
            type="text"
            placeholder="Search"
            className="form-control"
            onChange={Filter}
          />
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {records.map((d) => (
                <tr key={d.id}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>{d.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
