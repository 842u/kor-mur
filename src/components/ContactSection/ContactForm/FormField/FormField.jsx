import { useState } from 'react';

import getValidationInfo from '@/utils/validation';

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
  const [fieldValue, setFieldValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const [hasError, setHasError] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const valueChangeHandler = (event) => {
    const { hasErrorInfo, errorMessageInfo } = getValidationInfo(
      event.target.value,
      type,
      minLength,
      maxLength,
      required
    );

    setFieldValue(event.target.value);
    setHasError(hasErrorInfo);
    setErrorMessage(errorMessageInfo);
  };

  const isTouchedHandler = (event) => {
    setIsTouched(true);

    const { hasErrorInfo, errorMessageInfo } = getValidationInfo(
      event.target.value,
      type,
      minLength,
      maxLength,
      required
    );

    setFieldValue(event.target.value);
    setHasError(hasErrorInfo);
    setErrorMessage(errorMessageInfo);
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
