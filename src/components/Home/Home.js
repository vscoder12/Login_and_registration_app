import React from "react";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

export default function Home({setLoginUser}) {
  return (
    <section>
      <div className="container">
        <h2 className="title">This is a homepage.</h2>
        <Button variant="primary" className="btn btnLogout" onClick={() => setLoginUser({})}>
          Logout
        </Button>
      </div>
    </section>
  );
}
