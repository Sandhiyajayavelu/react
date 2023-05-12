import React from "react";
import "./styles.css";

export default function Register() {
  return (
    <div className="fondo">
      <br></br>
      <div className="form-register">
        <h4>Form registration</h4>
        <input
          className="controls"
          type="text"
          name="name"
          id="name"
          placeholder="username"
        />
        <input
          className="controls"
          type="password"
          name="password"
          id="pwd"
          placeholder="password"
        />
        <input
          className="email"
          type="email"
          name="email"
          id="email"
          placeholder="user mail"
        />
        <input
          className="controls"
          type="password"
          name="password"
          id="pwd"
          placeholder="mail password"
        />
        <p>
          Accept<a href="#">Terms and conditions</a>
        </p>
        <input className="buttons" type="submit" value="Register" />
        <p>
          <a href="/Login">already sign in?</a>
        </p>
      </div>
    </div>
  );
}
