import React from "react";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <main>
        <h1>contact Us</h1>

        <form action="">
          <div>
            <label htmlFor="">Name</label>
            <input type="text" placeholder="name" required />
          </div>

          <div>
            <label htmlFor="">Email</label>
            <input type="email" placeholder="mail" required />
          </div>

          <div>
            <label htmlFor="">message</label>
            <input type="email" placeholder="ask dout" required />
          </div>

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
