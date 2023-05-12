import React from "react";
import "./styles.css";

export default function Login() {
  return (
    <div>
      <br></br>
      <div className="form-register">
        <h4> Login</h4>
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
        <input className="botons" type="submit" value="sign in" />
        <p>
          <a href="/Registro">already signed in?</a>
        </p>
      </div>
    </div>
  );
}
