import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './HomePage.css'; // Ensure you have the necessary styles in this CSS file

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get("/api/blogs");
      setBlogs(res.data);
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      {/* About Us Section */}
      <section id="about-us" style={{ padding: "50px", backgroundColor: "#f8f9fa", animation: "fadeIn 1s" }}>
        <div className="container text-center">
          <h2>About Us</h2>
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEQMOlV7vOr3bT4bNXcLbq9t-sSyVzxkFNAw&s"
                alt="About Us"
                className="img-fluid"
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className="col-md-6">
              <p>
                We are S8UL Esports, a passionate gaming community committed to delivering exceptional gaming experiences. Our mission is to bring together gamers from around the world and foster a vibrant esports culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section (Card Carousel) */}
      <section id="blogs" style={{ padding: "50px" }}>
        <div className="container">
          <h1 className="text-center mb-5">Latest Blogs</h1>
          <div className="row">
            {blogs.map((blog) => (
              <div className="col-md-4 mb-4" key={blog._id}>
                <div className="card">
                  <img
                    src={blog.imageUrl}
                    className="card-img-top"
                    alt={blog.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">{blog.content.substring(0, 100)}...</p>
                    <Link to={`/blogs/${blog._id}`} className="btn btn-primary">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" style={{ padding: "50px", backgroundColor: "#f8f9fa" }}>
        <div className="container text-center">
          <h2>Contact Us</h2>
          <p>If you have any questions, feel free to reach out to us!</p>
          <form>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Your Name" required />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Your Email" required />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="4" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
