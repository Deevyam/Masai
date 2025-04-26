import React from 'react';
import FeedbackItem from './FeedbackItem';

export default function FeedbackList({ feedbacks, deleteFeedback }) {
  return (
    <div className="feedback-list">
      {feedbacks.map(fb => (
        <FeedbackItem
          key={fb.id}
          feedback={fb}
          deleteFeedback={deleteFeedback}
        />
      ))}
    </div>
  );
}
