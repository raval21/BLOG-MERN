import React from "react";

const ContactUsPage = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="5" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  );
};

export default ContactUsPage;
