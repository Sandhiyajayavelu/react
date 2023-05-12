import React from "react";
import "./styles.css";

export default function Home() {
  return (
    <div>
      <nav className="navegation">
        <ul className="menu">
          <li>
            <a className="a" href="/friendslist">
              friendslist
            </a>
            <div className="submenu"></div>
          </li>
          <li>
            <a className="a" href="/Recomendations">
              Recomendations
            </a>
          </li>
          <li>
            <a className="a" href="/Register">
              Register
            </a>
          </li>
          <li>
            <a className="a" href="/Login">
              Login
            </a>
          </li>
        </ul>
      </nav>
      <br></br>

      <h1 className="title">welcome to friendy trendy</h1>
      <br></br>
      <h1 className="cont">Make yourself free to chat!! relaxing website !!</h1>
    </div>
  );
}
