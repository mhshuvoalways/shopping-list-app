import brandLogo from "../../assets/brand-logo/brand-logo.png";
import { Link } from "@reach/router";

function Nav() {
  return (
    <nav className="nav __shadow--lg">
      <div className="container nav__container">
        <Link to={`/`}>
          <div className="nav__brand">
            <img className="nav__brand-logo" src={brandLogo} alt="Brand Logo" />
            <h1 className="nav__brand-name">Shopping List App</h1>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
