import React from "react";
import useForm from "./useForm";
import validateForm from "./validateForm";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validateForm
  );

  return (
    <div className="container">
      <h1>Registration Form</h1>

      <form autoComplete="off" onSubmit={handleSubmit} noValidate>
        {/*--- First Name & Last Name ---*/}
        <div className="form-group">
          <div className="input-group">
            <i className="ri-user-smile-line"></i>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="First Name"
              value={values.fname}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <i className="ri-user-smile-line"></i>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Last Name"
              value={values.lname}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="notes-list">
          {errors.fname && <p className="note">{errors.fname}</p>}
          {errors.lname && <p className="note">{errors.lname}</p>}
        </div>

        {/*--- Username & Phone Number ---*/}
        <div className="form-group">
          <div className="input-group">
            <i className="ri-at-line"></i>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={values.username}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <i className="ri-phone-line"></i>
            <input
              type="number"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              value={values.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="notes-list">
          {errors.username && <p className="note">{errors.username}</p>}
          {errors.phone && <p className="note">{errors.phone}</p>}
        </div>

        {/*--- Email Address ---*/}
        <div className="form-group">
          <div className="input-group long-input">
            <i className="ri-mail-line"></i>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail Address"
              value={values.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="notes-list">
          {errors.email && <p className="note long-note">{errors.email}</p>}
        </div>

        {/*--- Gender & Date of Birth ---*/}
        <div className="form-group">
          <div className="input-group">
            <i className="ri-genderless-line"></i>
            <select
              id="gender"
              name="gender"
              value={values.gender}
              onChange={handleChange}
            >
              <option value="" disabled>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="input-group">
            <i className="ri-cake-2-line"></i>
            <label>Date of Birth</label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              value={values.birthdate}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="notes-list">
          {errors.gender && <p className="note">{errors.gender}</p>}
          {errors.birthdate && <p className="note">{errors.birthdate}</p>}
        </div>

        {/*--- Country & Company Name ---*/}
        <div className="form-group">
          <div className="input-group">
            <i className="ri-earth-line"></i>
            <select
              id="country"
              name="country"
              value={values.country}
              onChange={handleChange}
            >
              <option value="" disabled>
                Country
              </option>
              <option value="aus">Australia</option>
              <option value="china">China</option>
              <option value="ph">Philippines</option>
              <option value="uk">United Kingdom</option>
              <option value="usa">United States of America</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="input-group">
            <i className="ri-briefcase-3-line"></i>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Your Company's Name"
              value={values.company}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="notes-list">
          {errors.country && <p className="note">{errors.country}</p>}
          {errors.company && <p className="note">{errors.company}</p>}
        </div>

        {/*--- Home Address & Company Address ---*/}
        <div className="form-group">
          <div className="input-group c-textarea">
            <i className="ri-home-8-line"></i>
            <textarea
              type="text"
              id="homeAddress"
              name="homeAddress"
              placeholder="Home Address"
              rows="2"
              value={values.homeAddress}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="input-group c-textarea">
            <i className="ri-building-4-line"></i>
            <textarea
              type="text"
              id="compAddress"
              name="compAddress"
              placeholder="Company's Address"
              value={values.compAddress}
              onChange={handleChange}
              rows="2"
            ></textarea>
          </div>
        </div>
        <div className="notes-list">
          {errors.homeAddress && <p className="note">{errors.homeAddress}</p>}
          {errors.compAddress && <p className="note">{errors.compAddress}</p>}
        </div>

        {/*--- Password & Confirm Password ---*/}
        <div className="form-group">
          <div className="input-group">
            <i className="ri-key-2-line"></i>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <i className="ri-key-2-line"></i>
            <input
              type="password"
              id="cPassword"
              name="cPassword"
              placeholder="Confirm Password"
              value={values.cPassword}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="notes-list">
          {errors.password && <p className="note">{errors.password}</p>}
          {errors.cPassword && <p className="note">{errors.cPassword}</p>}
        </div>

        {/*--- Terms & Updates ---*/}
        <div className="form-check">
          <label className="custom-checkbox">
            I agree with the terms and conditions.
            <input
              type="checkbox"
              id="terms"
              name="terms"
              value={values.terms}
              onChange={handleChange}
            />
            <span className="checkmark"></span>
          </label>
          <div className="notes-list">
            {errors.terms && <p className="note long-note">{errors.terms}</p>}
          </div>
          <label className="custom-checkbox">
            Receive best offers and updates.
            <input
              type="checkbox"
              id="updates"
              name="updates"
              value={values.updates}
              onChange={handleChange}
            />
            <span className="checkmark"></span>
          </label>
        </div>

        <button type="submit" className="submit-btn">
          Register
        </button>
      </form>

      <p className="login">
        Already have an account? <a href="#">Login</a>.
      </p>
    </div>
  );
};

export default FormSignup;
