import { Outlet, NavLink } from "react-router-dom"

export default function Layout() {
  return (
    <>
      <nav className="nav">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>

        <NavLink to="/courses" className={({ isActive }) => (isActive ? "active" : "")}>
          Courses
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
          About
        </NavLink>
      </nav>

      <main className="container">
        <Outlet />
      </main>

      <footer className="footer">Student Portal 2026</footer>
    </>
  )
}