import React from 'react';

export default function FeedbackItem({ feedback, deleteFeedback }) {
  const date = new Date(feedback.timestamp).toLocaleString();
  return (
    <div className="feedback-item">
      <h3>{feedback.name}</h3>
      <p>{feedback.comment}</p>
      <span className="email">{feedback.email}</span>
      <span className="timestamp">{date}</span>
      <button className="delete-btn" onClick={() => deleteFeedback(feedback.id)}>
        Delete
      </button>
    </div>
  );
}
