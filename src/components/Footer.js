import React from "react";

export default function Footer() {
  return (
    <div className="footer has-background-success">
      <footer>
        <p>
          &copy;
          <a href="https://elmicademy.com">Elmi Academy</a> -{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
