import React, { useState, useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';

const databaseUrl = 'https://feedbackform-5f449-default-rtdb.firebaseio.com/'; 

export default function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    const res = await fetch(`${databaseUrl}/feedbacks.json`);
    const data = await res.json();
    const loaded = data
      ? Object.entries(data).map(([id, fb]) => ({ id, ...fb })).reverse()
      : [];
    setFeedbacks(loaded);
  };

  const addFeedback = async (fb) => {
    await fetch(`${databaseUrl}/feedbacks.json`, {
      method: 'POST',
      body: JSON.stringify(fb)
    });
    fetchFeedbacks();
  };

  const deleteFeedback = async (id) => {
    await fetch(`${databaseUrl}/feedbacks/${id}.json`, { method: 'DELETE' });
    fetchFeedbacks();
  };

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <div className="container">
      <header>
        <h1>Feedback Board</h1>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </header>
      <main>
        <FeedbackForm addFeedback={addFeedback} />
        <FeedbackList feedbacks={feedbacks} deleteFeedback={deleteFeedback} />
      </main>
    </div>
  );
}
