import React, { useState } from 'react';
import './App.css';
import { StarIcon } from './IconComponents';

function App() {
  const [safetyRating, setSafetyRating] = useState(0);
  const [communicationRating, setCommunicationRating] = useState(0);
  const [recommendation, setRecommendation] = useState(null);

  const handleSafetyRating = (rating) => {
    setSafetyRating(rating);
  };

  const handleCommunicationRating = (rating) => {
    setCommunicationRating(rating);
  };

  const handleRecommendation = (value) => {
    setRecommendation(value);
  };

  const handleDeleteButtonClick = () => {
    setSafetyRating(0);
    setCommunicationRating(0);
    setRecommendation(null);
  };

  const handleSubmitButtonClick = () => {
    if (safetyRating === 0 || communicationRating === 0 || recommendation === null) {
      alert('Your review is empty.');
    } else {
      alert('Your review has been submitted');
      handleDeleteButtonClick();
    }
  };

  return (
    <div className="container">
      <div className="containe-1">
        <h1>Leave a review</h1>
      </div>
      <div>
        <h3 >Safety</h3>
        <p >How safe did you feel with Trausti?</p>
        <div >
          {[1, 2, 3, 4, 5].map((index) => (
            <StarIcon
              key={index}
              className={index <= safetyRating ? 'yellow' : 'gray'}
              onClick={() => handleSafetyRating(index)}
            />
          ))}
        </div>
      </div>
      <div >
        <h3 >Communication</h3>
        <p >How easy was to communicate with Trausti?</p>
        <div >
          {[1, 2, 3, 4, 5].map((index) => (
            <StarIcon
              key={index}
              className={index <= communicationRating ? 'yellow' : 'gray'}
              onClick={() => handleCommunicationRating(index)}
            />
          ))}
        </div>
      </div>
      <div >
        <h3 >Would you recommend Trausti?</h3>
        <div >
          <button className={`like ${recommendation === 'no' ? 'green white' : ' gray'}`} onClick={() => handleRecommendation('no')}>
            No
          </button>
          <button className={` like ${recommendation === 'yes' ? 'green white' : 'gray'}`} onClick={() => handleRecommendation('yes')}>
            Yes
          </button>
        </div>
      </div>
      <div >
        <h3 >Praise</h3>
        <p >What traits best describe Trausti?</p>
        <div className="">
          <button className="badge">Adventurous</button>
          <button className="badge"> Clean</button>
          <button className="badge">Good Listener</button>

        </div>
      </div>
      <div >
        <button className="delete" onClick={handleDeleteButtonClick}>
          Delete
        </button>
        <button className="submit" onClick={handleSubmitButtonClick}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
