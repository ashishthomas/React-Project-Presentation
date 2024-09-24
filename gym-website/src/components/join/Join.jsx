import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./Join.css";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const userEmail = e.target.user_email.value;
    const gmailComposeUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${userEmail}&su=Join Us Inquiry&body=Hello from Join Us page!`;
    window.open(gmailComposeUrl, "_blank");

    emailjs
      .sendForm(
        "service_h9g0btg",
        "template_5urckpa",
        form.current,
        "GJAtl73WZaFyf9KlA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email address"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
