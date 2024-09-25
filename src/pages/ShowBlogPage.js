import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const ShowBlogPage = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await axios.get(`/api/blogs/${id}`);
      setBlog(res.data);
    };
    fetchBlog();
  }, [id]);

  const handleDelete = async () => {
    await axios.delete(`/api/blogs/${id}`);
    navigate("/");
  };

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1 className="mb-4">{blog.title}</h1>
      {blog.imageUrl && (
        <img src={blog.imageUrl} alt={blog.title} className="img-fluid mb-4" />
      )}
      <p className="lead">{blog.content}</p>
      <div>
        <Link to={`/blogs/edit/${id}`} className="btn btn-primary me-2">
          Edit
        </Link>
        <button onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ShowBlogPage;
