import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
    preferredTime: '',
    question: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value.trimStart() }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be 10 digits.';
    if (!formData.course) newErrors.course = 'Please select a course.';
    if (!formData.preferredTime) newErrors.preferredTime = 'Please select a preferred time.';
    if (!formData.question.trim()) newErrors.question = 'Please enter your question.';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Thanks! Your inquiry has been received.');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          course: '',
          preferredTime: '',
          question: '',
        });
        setErrors({});
      } else {
        toast.error('Failed to submit inquiry. Please try again.');
      }
    } catch (error) {
      toast.error('Server error. Try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: #ccc;
          box-shadow: none;
        }
        .error-message {
          color: red;
          font-size: 0.85rem;
          margin-top: 4px;
          text-align: left;
        }
      `}</style>

      <section id="inquiry" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.heading}>Start Your Learning Journey</h2>
          <p style={styles.subheading}>Tell us a bit about yourself and your interests.</p>
          <form onSubmit={handleSubmit} style={styles.form} noValidate>
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                style={styles.input}
                required
              />
              {errors.fullName && <div className="error-message">{errors.fullName}</div>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                required
              />
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                style={styles.input}
                required
              />
              {errors.phone && <div className="error-message">{errors.phone}</div>}
            </div>

            <div>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                style={styles.select}
                required
              >
                <option value="">Select a course</option>
                <option value="Java Programming">Java Programming</option>
                <option value="Python Programming">Python Programming</option>
                <option value="C/C++ Programming">C/C++ Programming</option>
                <option value="Web Development">Web Development</option>
              </select>
              {errors.course && <div className="error-message">{errors.course}</div>}
            </div>

            <div>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                style={styles.select}
                required
              >
                <option value="">Preferred Time Slot</option>
                <option value="Morning (8 AM - 10 AM)">Morning (8 AM - 10 AM)</option>
                <option value="Afternoon (1 PM - 3 PM)">Afternoon (1 PM - 3 PM)</option>
                <option value="Evening (6 PM - 8 PM)">Evening (6 PM - 8 PM)</option>
              </select>
              {errors.preferredTime && <div className="error-message">{errors.preferredTime}</div>}
            </div>

            <div>
              <textarea
                name="question"
                placeholder="Your question"
                value={formData.question}
                onChange={handleChange}
                style={styles.textarea}
                rows={4}
                required
              />
              {errors.question && <div className="error-message">{errors.question}</div>}
            </div>

            <button
              type="submit"
              style={{
                ...styles.button,
                backgroundColor: isSubmitting ? '#95a5a6' : '#2a4365',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                opacity: isSubmitting ? 0.7 : 1,
              }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
            </button>
          </form>
        </div>
      </section>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        style={{
          width: '90%',
          maxWidth: '400px',
          margin: '0 auto',
          textAlign: 'center',
          fontSize: '1rem',
        }}
      />
    </>
  );
};

const styles = {
  section: {
    background: 'linear-gradient(to right, #f0f4ff, #eaf2ff)',
    padding: '80px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    maxWidth: '600px',
    backgroundColor: '#fff',
    padding: '40px 30px',
    borderRadius: '15px',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.2rem',
    color: '#2c3e50',
    marginBottom: '12px',
  },
  subheading: {
    fontSize: '1rem',
    color: '#7f8c8d',
    marginBottom: '25px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    textAlign: 'left',
  },
  input: {
    padding: '12px',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    width: '100%',
    boxSizing: 'border-box',
  },
  select: {
    padding: '12px 15px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #bdc3c7',
    outline: 'none',
    boxShadow: 'none',
    backgroundColor: '#fff',
    width: '100%',
    boxSizing: 'border-box',
  },
  textarea: {
    padding: '12px',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    width: '100%',
    boxSizing: 'border-box',
    resize: 'none',
    fontFamily: 'inherit',
  },
  button: {
    padding: '14px',
    fontSize: '1.05rem',
    color: '#fff',
    fontWeight: '600',
    border: 'none',
    borderRadius: '8px',
    transition: 'background 0.3s ease',
  },
};

export default InquiryForm;
