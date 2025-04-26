import React, { useState } from 'react';

export default function FeedbackForm({ addFeedback }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!name || !email || !comment) {
      setError('All fields are required.');
      return;
    }
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format.');
      return;
    }
    const newFb = { name, email, comment, timestamp: Date.now() };
    try {
      await addFeedback(newFb);
      setSuccess('Feedback submitted!');
      setName('');
      setEmail('');
      setComment('');
      setTimeout(() => setSuccess(''), 3000);
    } catch {
      setError('Submission failed.');
    }
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <h2>Submit Feedback</h2>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <textarea placeholder="Comment" value={comment} onChange={e => setComment(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}
