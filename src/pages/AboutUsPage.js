import React from "react";
import "./AboutUsPage.css"; // Import CSS for animations

const AboutUsPage = () => {
  return (
    <div className="about-us">
      <div className="about-image">
        {/* You can replace this with an animated image or a GIF */}
        <img src="https://example.com/your-image.gif" alt="About Us" />
      </div>
      <div className="about-text">
        <h1>About Us</h1>
        <p>
          Welcome to S8UL Esports! We are a community-driven platform dedicated
          to bringing you the latest news, updates, and insights from the esports
          world. Join us in exploring the exciting realm of competitive gaming!
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
