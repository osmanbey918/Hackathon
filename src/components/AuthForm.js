import React, { useState } from 'react';

const AuthForm = ({ fields, onSubmit, submitLabel, loading, switchLabel, onSwitch }) => {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name} className={field.className || ''}>
          {field.type === 'radio' ? (
            field.options.map((option) => (
              <label key={option.value}>
                <input
                  type="radio"
                  name={field.name}
                  value={option.value}
                  checked={formData[field.name] === option.value}
                  onChange={handleChange}
                  required={field.required}
                />
                {option.label}
              </label>
            ))
          ) : (
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
              className={field.inputClassName || 'input-field'}
              required={field.required}
            />
          )}
        </div>
      ))}
      <button type="submit" className="signup-button login-button">{submitLabel}</button>
      {loading && <div className="loading">Loading...</div>}
      {onSwitch && (
        <button type="button" className="l-btn" onClick={onSwitch}>{switchLabel}</button>
      )}
    </form>
  );
};

export default AuthForm;
