import { NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function MainLayout() {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul className="">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/skills">Skills</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
}

export default MainLayout;
