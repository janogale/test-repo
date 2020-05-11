import React from "react";

import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Page Not Found</h1>
            <h2 className="subtitle">
              We couldn't find what you were looking for.
            </h2>
            <p>
              Please contact the owner of the site that linked you to the
              original URL and let them know their link is broken.
            </p>
            <h3>You can visit these Pages instead.</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
