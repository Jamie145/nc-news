import { Link } from "react-router-dom"; // Don't forget to import Link!

function Header() {
  return (
    <header className="main-header"> {/* Added main-header class */}
      <div className="header-content"> {/* Added header-content class */}
        <h1 className="site-title">NC NEWS</h1> {/* Added site-title class */}
        <nav className="main-nav"> {/* Added main-nav class */}
          <ul className="nav-list"> {/* Added nav-list class */}
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link> {/* Added nav-link class */}
            </li>
            <li className="nav-item">
              <Link to="/topics" className="nav-link">Topics</Link>
            </li>
            <li className="nav-item">
              <Link to="/articles" className="nav-link">Articles</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;