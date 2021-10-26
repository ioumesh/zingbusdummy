import React, { useState } from "react";
import Data from "../../Data/data";
import "../../App.css";

const Card = () => {
  const [data, setData] = useState(Data);
  const [order, setOrder] = useState(1);

  const sorting = (currElement) => {
    if (order === 1) {
      const sorted = [...data].sort((a, b) =>
        a[currElement].toLowerCase() > b[currElement].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder(0);
    }
    if (order === 0) {
      const sorted = [...data].sort((a, b) =>
        a[currElement].toLowerCase() < b[currElement].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder(1);
    }
  };
  const handleCheck = () => {};
  return (
    <div>
      <div>
        <table id="students">
          <th onClick={() => sorting("name")}>
            Name <span>&#8645;</span>
          </th>
          <th>Marks</th>
          <th>Subject</th>
          {data.map((item, key) => {
            return (
              <>
                <tr key={item.id}></tr>
                <tr>
                  <td>{item.name}</td>
                  <td>
                    {item.marks.map((data) => {
                      return <p>{data}</p>;
                    })}
                  </td>
                  <td>
                    {item.subjects.map((data) => {
                      return <p>{data}</p>;
                    })}
                  </td>
                </tr>
              </>
            );
          })}
        </table>
        <div className="btnContainer">
          <button className="btn" onClick={handleCheck}>
            Check Topper
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
