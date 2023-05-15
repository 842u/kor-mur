import { useState } from 'react';

import styles from './FormField.module.scss';

export default function FormField({
  label,
  type,
  id,
  placeholder,
  required = false,
  minLength,
  maxLength,
}) {
  const [fieldValue, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const [hasError, setHasError] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
    if (required && event.target.value.trim().length === 0) {
      setHasError(true);
      setErrorMessage('This field is required');
    } else if (event.target.value.trim().length < minLength) {
      setHasError(true);
      setErrorMessage(`This field must be at least ${minLength} characters long`);
    } else if (event.target.value.trim().length > maxLength) {
      setHasError(true);
      setErrorMessage(`This field must be no more than ${maxLength} characters long`);
    } else {
      setHasError(false);
    }
  };

  const isTouchedHandler = (event) => {
    setIsTouched(true);
    if (required && event.target.value.trim().length === 0) {
      setHasError(true);
      setErrorMessage('This field is required');
    } else if (event.target.value.trim().length < minLength) {
      setHasError(true);
      setErrorMessage(`This field must be at least ${minLength} characters long`);
    } else if (event.target.value.trim().length > maxLength) {
      setHasError(true);
      setErrorMessage(`This field must be no more than ${maxLength} characters long`);
    } else {
      setHasError(false);
    }
  };

  const textareaField = (
    <textarea
      id={id}
      name={id}
      placeholder={placeholder}
      value={fieldValue}
      required={required}
      onChange={valueChangeHandler}
      onBlur={isTouchedHandler}
    />
  );

  const inputField = (
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      value={fieldValue}
      aria-label={`${id} input field`}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
      onChange={valueChangeHandler}
      onBlur={isTouchedHandler}
    />
  );

  const requiredFlag = <span className={styles['required-flag']}> * </span>;

  const fieldClasses = `${styles.field} ${isTouched && hasError && styles.invalid} ${
    isTouched && !hasError && styles.valid
  }`;

  return (
    <label className={fieldClasses} htmlFor={id}>
      <span>
        {label}
        {required && requiredFlag}
      </span>
      {type === 'textarea' ? textareaField : inputField}
      {isTouched && hasError && <p>{errorMessage}</p>}
    </label>
  );
}
