import { NavLink } from "@remix-run/react";
import { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-scroll";

export default function NavBar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggle = () => setMobileMenu((m) => !m);
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <header className="siteHeader">
		<div className="always-flex justify siteHeaderUnder">
			<div className="logoContainer">
				<NavLink to="/">
					<Logo />
				</NavLink>
			</div>

			<div className="hamContainer">
				<div className={mobileMenu ? "hamburger active" : "hamburger"}>
					<div
					className="ham-trigger flex-vertical"
					onClick={toggle}
					onKeyDown={handleKeyDown}
					role="button"
					tabIndex={0}
					aria-expanded={mobileMenu}
					aria-controls="mobile-nav"
					>
					<div className={mobileMenu ? "ham-button active" : "ham-button"}>
						<span className="line line-1" />
						<span className="line line-2" />
						<span className="line line-3" />
					</div>
					</div>
				</div>
			</div>
			<DesktopNav onClose={() => setMobileMenu(false)} />
		</div>

      	{mobileMenu && <MobileNav onClose={() => setMobileMenu(false)} />}
		
    </header>
  );
}

// Destructure the prop you need
function MobileNav({ onClose }) {
  return (
    <nav id="mobile-nav" className="panel">
      <div className="inside-xxl panelUnder">
        <ul className="mobileNav">
          <li>
            <NavLink to="/" onClick={onClose}>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={onClose}>
              <span>About Us</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/faqs" onClick={onClose}>
              <span>FAQs</span>
            </NavLink>
          </li>
          <li>
            <a
              href="https://www.paypal.com/paypalme/ShinyWindowsLLC"
              onClick={onClose}
            >
              <span>Pay Bill</span>
            </a>
          </li>
		      <li>
            <Link className="linkBlue scrollLink" to="contact" onClick={onClose}>
              <span>Contact / Estimates</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function DesktopNav({ onClose }) {
  return (
    <nav id="" className="desktopNav">
      <div className="flex-md justify-center desktopNavSub">
        <ul className="mobileNav always-flex">
          <li>
            <NavLink className="flex-vertical" to="/" onClick={onClose}>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="flex-vertical" to="/about" onClick={onClose}>
              <span>About Us</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="flex-vertical" to="/faqs" onClick={onClose}>
              <span>FAQs</span>
            </NavLink>
          </li>
          <li>
            <a
              className="flex-vertical"
              href="https://www.paypal.com/paypalme/ShinyWindowsLLC"
              onClick={onClose}
            >
              <span>Pay Bill</span>
            </a>
          </li>
		   <li>
            <Link className="linkBlue flex-vertical scrollLink" to="contact" onClick={onClose}>
              <span>Contact / Estimates</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
