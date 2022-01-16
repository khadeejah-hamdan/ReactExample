import React from "react";

export default function ListItem(props) {
  const { name, done } = props.todo;
  return (
    <li className="w-25">
      <div className="card">
        <div className="card-body">
          <h3
            style={{
              textDecoration: done ? "line-through" : "",
              color: "black",
              textAlign: "center",
            }}
            className="card-title"
          >
            {name}
          </h3>
          <div
            className="justify-content-lg-around"
            style={{ display: "flex" }}
          >
            {!done ? (
              <button
                onClick={props.completed}
                className="btn btn-primary btn-lg"
              >
                Completed
              </button>
            ) : (
              ""
            )}
            <button onClick={props.remove} className="btn btn-warning btn-lg">
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
