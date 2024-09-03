import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './stylesheet/global.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGraduationCap, faPhone, faEnvelope, faChessBoard, faChessKing, faSchoolFlag } from '@fortawesome/free-solid-svg-icons';

const RegistrationForm = ({ onSubmit }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('success'); 

  useEffect(() => {
    if (alertMessage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [alertMessage]);

  const onFormSubmit = async (data) => {
    setIsSubmitting(true);
    setAlertMessage('');
    setAlertType('success');

    try {
      await new Promise((resolve) => setTimeout(resolve, 3000)); 

      const response = await fetch('https://chesscheckmate.onrender.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        setAlertType('success');
        setAlertMessage('Registration successful!');
        reset(); 
        onSubmit();  // Refresh user list after successful registration
      } else {
        setAlertType('danger');
        setAlertMessage(result.message || 'You are already registered');
      }
    } catch (error) {
      setAlertType('danger');
      setAlertMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setAlertMessage('');
      }, 3000);
    }
  };

  return (
    <div className="registration-form-container">
      <div className="registration-form">
        <div className="form-content">
          {isSubmitting && (
            <div className="loading-overlay">
              <div className="loader"></div> 
            </div>
          )}
          <div className="heading"><h2 className="form-title">Chess Registration Form</h2></div>

          {alertMessage && (
            <div className={`alert alert-${alertType} alert-dismissible fade show`} role="alert" style={{ width: '100%' }}>
              {alertMessage}
              <button type="button" className="btn-close" onClick={() => setAlertMessage('')} aria-label="Close"></button>
            </div>
          )}

          <form onSubmit={handleSubmit(onFormSubmit)} className="form">
            <div className="form-group">
              <label htmlFor="username" className="form-label"> <FontAwesomeIcon icon={faUser} className='faicon' autocomplete="off" /> Full Name</label>
              <input
                id="username"
                placeholder="Enter your full name"
                {...register("username", {
                  required: "This field is required",
                  minLength: { value: 3, message: "Minimum length is 3 characters" },
                  maxLength: { value: 16, message: "Maximum length is 16 characters" }
                })}
                type="text"
                className={`form-control ${errors.username ? 'is-invalid' : ''}`}
              />
              {errors.username && <div className="invalid-feedback">{errors.username.message}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="course" className="form-label"><FontAwesomeIcon icon={faGraduationCap} className='faicon' /> Course & Class</label>
              <input
                id="course"
                placeholder="Enter your course and class"
                {...register("course", {
                  required: "This field is required"
                })}
                type="text"
                className={`form-control ${errors.course ? 'is-invalid' : ''}`}
              />
              {errors.course && <div className="invalid-feedback">{errors.course.message}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="college" className="form-label"><FontAwesomeIcon icon={faSchoolFlag} className='faicon' /> College</label>
              <select
                id="college"
                {...register("college", {
                  required: "This field is required"
                })}
                className={`form-control ${errors.college ? 'is-invalid' : ''}`}
              >
                <option value="" disabled selected>Select your College +</option>
                <option value="DPG Degree College">DPG Degree College</option>
                <option value="DPG STM College">DPG STM College</option>
                <option value="DPG Polytechnic College">DPG Polytechnic College</option>
                <option value="DPG ITM">DPG ITM</option>
              </select>
              {errors.college && <div className="invalid-feedback">{errors.college.message}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">  <FontAwesomeIcon icon={faPhone} className='faicon' /> Phone No</label>
              <input
                id="phone"
                placeholder="Enter your phone number"
                {...register("phone", {
                  required: "This field is required",
                  pattern: { value: /^\d{10}$/, message: "Phone number must be exactly 10 digits" }
                })}
                type="text"
                maxLength="10"
                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
              />
              {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label"> <FontAwesomeIcon icon={faEnvelope} className='faicon' /> Email ID </label>
              <input
                id="email"
                placeholder="Enter your email address"
                {...register("email")}
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              />
              {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="chess_id" className="form-label"><FontAwesomeIcon icon={faChessBoard} className='faicon' /> Chess.com ID (Optional)</label>
              <input
                id="chess_id"
                placeholder="Enter your Chess.com ID"
                {...register("chess_id")}
                type="text"
                className={`form-control ${errors.chess_id ? 'is-invalid' : ''}`}
              />
              {errors.chess_id && <div className="invalid-feedback">{errors.chess_id.message}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="rating" className="form-label"> <FontAwesomeIcon icon={faChessKing} className='faicon' /> Rating (Optional)</label>
              <input
                id="rating"
                placeholder="Enter your rating"
                {...register("rating", {
                  pattern: { value: /^\d{3,4}$/, message: "Rating must be 3 or 4 digits" }
                })}
                type="text"
                maxLength="4"
                className={`form-control ${errors.rating ? 'is-invalid' : ''}`}
              />
              {errors.rating && <div className="invalid-feedback">{errors.rating.message}</div>}
            </div>

            <div className="form-group">
              <button type="submit" className="btn formbtn" disabled={isSubmitting} style={{ backgroundColor: '#81B64C', color: 'white' }}>
                {isSubmitting ? 'Submitting...' : 'Register'}
              </button>
            </div>
          </form>
        </div>
      </div >
    </div >
  );
};

export default RegistrationForm;
