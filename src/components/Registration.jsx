import { useState } from 'react';
import './Registration.css';

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    event: 'Robowars Championship',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Thank you! Your demo registration form was submitted.');
    setFormData({
      name: '',
      email: '',
      college: '',
      event: 'Robowars Championship',
    });
  };

  return (
    <section className="registration-section" id="register">
      <div className="registration-container">

        <div className="registration-info">
          <span>BE PART OF THE FUTURE</span>
          <h2>READY TO <br />INNOVATE?</h2>
          <p>
            Join thousands of innovators, creators and technology
            enthusiasts at an unforgettable celebration of innovation.
          </p>

          <div className="registration-highlight">
            <h3>YOUR JOURNEY STARTS HERE.</h3>
            <p>Think. Create. Innovate. Inspire.</p>
          </div>
        </div>

        <div className="registration-form-box">
          <h3>REGISTER NOW</h3>
          <p>Enter your details to get started.</p>

          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>College / Institution</label>
            <input
              type="text"
              name="college"
              placeholder="Enter your college name"
              value={formData.college}
              onChange={handleChange}
              required
            />

            <label>Select Event</label>
            <select
              name="event"
              value={formData.event}
              onChange={handleChange}
            >
              <option>Robowars Championship</option>
              <option>AI & Technology Summit</option>
              <option>Web Development Workshop</option>
              <option>Coding Challenge</option>
              <option>Project Exhibition</option>
            </select>

            <button type="submit">
              SUBMIT REGISTRATION ↗
            </button>

            {message && (
              <p className="registration-message">{message}</p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}

export default Registration;