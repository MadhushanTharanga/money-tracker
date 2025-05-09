import { useState } from "react";
import "./App.css";
import process from 'process';


function App() {
  const [name, setName] = useState("");
  const [datetime, setDatetime] = useState("");
  const [description, setDescription] = useState("");
  function addNewTransaction(ev) {
    ev.preventDefault();
    const url = process?.env?.REACT_APP_API_URL || 'http://localhost:3000';

    console.log(url);
    // fetch(url)
  }
  return (
    <div className="main-outer">
      {" "}
      <div className="inner-wrapper">
        {" "}
        <h1>
          $400<span>.00</span>{" "}
        </h1>{" "}
        <form onSubmit={addNewTransaction}>
          {" "}
          <div className="basic">
            <input
              type="text"
              placeholder="+200 new sansung TV"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />
            <input
              type="datetime-local"
              value={datetime}
              onChange={(ev) => setDatetime(ev.target.value)}
            />{" "}
          </div>{" "}
          <div className="discription">
            <input
              type="text"
              placeholder="Enter Discription"
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
            />{" "}
          </div>{" "}
          <button type="submit">Add New Transaction</button>{" "}
        </form>{" "}
        <div className="transactions">
          {" "}
          <div className="line1">
            {" "}
            <div className="desc1">new bike</div>{" "}
            <div className="money1">-$300</div>{" "}
          </div>{" "}
          <div className="line2">
            {" "}
            <div className="desc2">test</div>{" "}
            <div className="date-time">2025-05-07 09:27</div>{" "}
          </div>{" "}
          <hr />{" "}
        </div>{" "}
        <div className="transactions">
          {" "}
          <div className="line1">
            {" "}
            <div className="desc1">website gig</div>{" "}
            <div className="money2">$800</div>{" "}
          </div>{" "}
          <div className="line2">
            {" "}
            <div className="desc2">website for my uncle</div>{" "}
            <div className="date-time">2023-02-17 10:47</div>{" "}
          </div>{" "}
          <hr />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
