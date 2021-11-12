import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message" />
          {message && <span>Thanks, I'll reply ASAP :)</span>}
          <button className="" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
