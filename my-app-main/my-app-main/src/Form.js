import React from "react";

export default function Form(props) {
  return (
    <form
      className="mb-5 todo-form"
      onSubmit={props.onSubmit}
      style={{ paddingLeft: 40 }}
    >
      <div className="input-group mb-3 todo-input">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon3">
            Enter a task:
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
          value={props.value}
          onChange={props.onChange}
        />
      </div>
      <button className="todo-btn btn btn-success w-25" type="submit">
        Add ToDo
      </button>
    </form>
  );
}
