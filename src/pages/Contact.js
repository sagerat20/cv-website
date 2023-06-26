import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";

const Contact = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get("http://localhost:3000/comments");
      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newComment.trim() === "") return;

    try {
      const response = await axios.post("http://localhost:3000/comments", {
        body: newComment,
      });

      setComments([...comments, response.data]);
      setNewComment("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="interests">
          <div class="resume-section-content">
            <h2 class="mb-5">Let's Talk</h2>
            <ul>
              {comments.map((comment) => (
                <li key={comment.id}>{comment.body}</li>
              ))}
            </ul>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button type="submit">Add Comment</button>
            </form>
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Contact;
