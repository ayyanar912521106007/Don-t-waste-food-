import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Reducing Food Waste : Are You Part of the Solution?</h1>
        
      </header>

      <section className="challenge">
        <h2>The Challenge</h2>
        <p>The challenge is not a lack of food — it is making food consistently available to everyone who needs it.</p>
      </section>

      <section className="statistics">
        <div className="stat">
          <div className="circle">
            <img src="https://i.postimg.cc/W3dcsyB9/3.jpg" alt="Hunger Kills" />
          </div>
          <p>Hunger kills more people each year than AIDS, malaria, and terrorism combined.</p>
        </div>

        <div className="stat">
          <div className="circle">
            <img src="https://i.postimg.cc/wvq3F9s1/5.jpg" alt="Child Hunger" />
          </div>
          <p>Every 10 seconds, a child dies from hunger.</p>
        </div>

        <div className="stat">
          <div className="circle">
            <img src="https://i.postimg.cc/8zgptT2T/7.jpg" alt="Food Surplus" />
          </div>
          <p>82% of hungry people live in countries with food surpluses.</p>
        </div>

        <div className="stat">
          <div className="circle">
            <img src="https://i.postimg.cc/wMz2wyQh/4.jpg" alt="Food Waste" />
          </div>
          <p>One-third of the food produced around the world is never consumed.</p>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How We Work</h2>
        <p>We reduce hunger and food waste by redistributing surplus food to the underprivileged.</p>
        <p>We partner with restaurants, businesses, and individuals to collect excess food and deliver it to those in need.</p>
      </section>

      <section className="join-us">
        <h2>Join Our Team</h2>
        <p>Become part of the solution! Volunteer or collaborate with us today.</p>
        <button>Join Us</button>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>Email:yaai@food.org</p>
        <p>Phone: +91 6369122395,
                  +91 6379162472,
                  +91 9585322863
        </p>
        <div className="gpay">
          <img src="https://i.postimg.cc/m2tTy88N/9.jpg" alt="Google Pay QR Code" />
        </div>
      </section>

      <footer>
        <p>Feedback: We’d love to hear from you!</p>
        <textarea placeholder="Your feedback here..."></textarea>
        <p>நீங்கள் சாப்பிடும் உணவில் உங்கள் பெயர் உள்ளதா என்று தெரியவில்லை...!!
ஆனால்..! நீங்கள் 
வீணாக்கும் உணவில் அடுத்தவர் பசி உள்ளது.</p>
<p>Share food, share joy, share life</p>
      </footer>
    </div>
  );
}

export default App;
