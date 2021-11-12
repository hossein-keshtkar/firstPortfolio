import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 2000,
      backSpeed: 60,
      strings: ["Web Developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="./assets/man.png" alt="Handsome guy" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Hossein Haranaki</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
          <a href="#portfolio">
            <img src="./assets/down.png" alt="donw" />
          </a>
        </div>
      </div>
    </div>
  );
}
