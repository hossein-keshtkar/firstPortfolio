import { BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";
import "./topbar.scss";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemContainer">
            <BsFillTelephoneFill className="icon" />
            <span>+ 98 912 1234 56 78</span>
          </div>
          <div className="itemContainer">
            <BsFillEnvelopeFill className="icon" />
            <span>Hossein.haranaki@gmail.com</span>
          </div>
        </div>
        <div className="mid"></div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
